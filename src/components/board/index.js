import React, { useState }from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Button } from "react-native";
import { greenBlueDark } from "../../styles/colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import styles from "./styles";
import List from "../list";
import ListToolbar from "../listToolbar";
import Main from "../../views/main";
import { TextInput } from "@react-native-material/core";

export const Board = ({updateTask, deleteTask, updateTaskStatus, board, lists, tasks, onLongPress, isSelected, updateBoard }) => {
    const listByBoardId = lists.filter(list => list.boardId === board.id);
    const [boardName, setBoardName] = useState(board.name);
    const [isEditingBoard, setIsEditingBoard] = useState(false);
    const [boardDescription, setBoardDescription] = useState(board.description);
    const [imgURL, setImgURL] = useState(board.thumbnailPhoto);
    
    const onBoardUpdate = () => {
        const updatedBoard = {
            id: board.id,
            name: boardName,
            thumbnailPhoto: board.thumbnailPhoto,
            description: boardDescription,
        }
        setBoardName("");
        setIsEditingBoard(false);
        updateBoard(updatedBoard);
    }

    return (

        <TouchableOpacity onLongPress={() => onLongPress(board.id)} >
            
            <View style={
                        isSelected
                        ? styles.isSelectedBoard
                        : styles.board
                        }>
            {
                isSelected
                    ?
                    <AntDesign name="checkcircleo" style={styles.checkmark} />
                    :
                    <></>
            }
            
                <Image 
                    style={styles.boardImage}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto }} />
                {
                        isEditingBoard
                        ?
                        <> 
                        <View style={styles.createBoardContainer}>
                            <Text style={styles.updateBoardHeader}>Edit Board Info</Text>
                            <TextInput
                                
                                color={greenBlueDark}
                                label="Board Name"
                                value={boardName}
                                onChangeText={(text) => setBoardName(text)}
                            />
                            <TextInput
                                
                                color={greenBlueDark}
                                label="Image URL"
                                value={imgURL}
                                onChangeText={(text) => setImgURL(text)}
                            />
                            <TextInput
                                style={styles.BoardNameInput}
                                color={greenBlueDark}
                                label="Board Description"
                                value={boardDescription}
                                onChangeText={(text) => setBoardDescription(text)}
                                />
                            <View style={styles.createBoardBtns}>
                                <Button
                                    title="Update Board"
                                    onPress={onBoardUpdate}
                                    color={greenBlueDark}
                                />
                                <Button
                                    title="Cancel"
                                    onPress={() => setIsEditingBoard(false)}
                                    
                                />
                            </View>    
                
                        </View>
                        
                       </>
                        :
                        <>
                        <View style={styles.boardInfo}>
                            <Text style={styles.boardName}>{board.name}</Text>
                            
                            <TouchableOpacity
                                        onPress={() => setIsEditingBoard(true)}>
                                <AntDesign name="edit" style={styles.editIcon} />
                            </TouchableOpacity>
                        </View>
                        {   
                            board.description
                            ?
                            <Text style={styles.boardDescription}>{board.description}</Text>
                            :
                            <></>
                        }
                        
                        </>
                    }
                    
                
                <FlatList
                    data={listByBoardId}
                    numColumns={1}
                    renderItem={({item}) => (<List board={board} list={item} tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} updateTask={updateTask} lists={lists}/>)}
                    keyExtractor={(item) => item?.id}/>
            </View> 
            
        </TouchableOpacity>

    )}; 

export default Board;