import React, { useState }from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import styles from "./styles";
import List from "../list";
import { TextInput } from "@react-native-material/core";

export const Board = ({ board, lists, tasks, onLongPress, isSelected, updateBoard }) => {
    const listByBoardId = lists.filter(list => list.boardId === board.id);
    const [boardName, setBoardName] = useState(board.name);
    const [isEditingBoard, setIsEditingBoard] = useState(false);
    
    const onBoardUpdate = () => {
        const updatedBoard = {
            id: board.id,
            name: boardName,
            thumbnailPhoto: board.thumbnailPhoto,
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
                        <View style={styles.boardInfo}>
                        
                        <TextInput 
                            color="#000" 
                            style={styles.boardNameInput} 
                            variant="standard" 
                            value={boardName}
                            onChangeText={setBoardName}
                            />
                        <TouchableOpacity 
                                        onPress={() => setIsEditingBoard(false)}>
                            <Octicons name="x-circle" style={[styles.actionIcon, {color: "red"}]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onBoardUpdate}>
                            <Octicons name="check-circle" style={[styles.actionIcon, {color: "green"}]} />
                        </TouchableOpacity>
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
                        </>
                    }
                    
                
                <FlatList
                        numColumns={3}
                        data={listByBoardId}
                        renderItem={({item}) => (<List board={board} list={item} tasks={tasks} />)}
                        keyExtractor={(item) => item?.id}/>
            </View> 
            
        </TouchableOpacity>
    )}; 

export default Board;