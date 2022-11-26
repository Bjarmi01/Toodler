import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { Board } from "../board";
import styles from "./styles";
import {  TextInput } from "@react-native-material/core";
import { greenBlueDark } from "../../styles/colors";

export const BoardList = ({updateList, onTaskSubmit, updateTask, deleteTask, deleteList, updateTaskStatus, boards, lists, tasks, onLongPress, selectedBoards, isCreatingBoard, onCreateBoardCancel, onBoardSubmit, updateBoard, onListSubmit}) => {
    const [boardName , setBoardName] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [boardDescription, setBoardDescription] = useState("");
    const [listName , setListName] = useState("");
    const [isListNamed, setIsListNamed] = useState(false);
    const [listColor, setListColor] = useState("");
    const [boardId, setBoardId] = useState("");

    const [selected, setSelected] = useState("");
    const data = boards.map((board)=>{
        return{
            key: board.id,
            value: board.name
        };
    });
    
    const createBoard = () => {
        const newBoard = {
            id: boards.length + 1,
            name: boardName,
            thumbnailPhoto: imgURL,
            description: boardDescription,
        }
        setBoardName("");
        setBoardDescription("");
        setImgURL("");
        onBoardSubmit(newBoard);
    
    }

    const createList = () => {
        const newList = {
            boardId: parseInt(boardId),
            id: lists.length + 1,
            name: listName,
            color: listColor,
        }
        setBoardId("");
        setIsListNamed(false);
        setListName("");
        setListColor("");
        onListSubmit(newList);
    
    }


    return (
        <View style={styles.list}>
            <View>
            {
                isCreatingBoard
                ?
                <View style={styles.createBoardContainer}>
                <Text style={styles.createBoardHeader}>Create a New Board</Text>
                <TextInput
                    style={styles.BoardNameInput}
                    color={greenBlueDark}
                    label="Board Name"
                    value={boardName}
                    onChangeText={(text) => setBoardName(text)}
                />
                <TextInput
                    style={styles.BoardNameInput}
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
                        title="Create Board"
                        onPress={() => createBoard()}
                        color={greenBlueDark}
                    />
                    <Button
                        title="Cancel"
                        onPress={() => onCreateBoardCancel()}
                        
                    />
                </View>    
                
                </View>
                
            
                :
                <></>
            }
            </View>

        
            <View>    
                <FlatList  
                    data={boards}
                    renderItem={({item}) => (
                        <Board 
                        onLongPress={onLongPress}
                        isSelected={selectedBoards.includes(item.id)}
                        board={item} 
                        lists={lists} 
                        updateBoard={updateBoard}
                        tasks={tasks} 
                        updateTaskStatus={updateTaskStatus}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        onListSubmit={onListSubmit}
                        onTaskSubmit={onTaskSubmit}
                        deleteList={deleteList}
                        updateList={updateList}
                        />)}
                                    
                    keyExtractor={(item) => item?.id}
                />
            </View>
        </View>
       
    )
};


 
export default BoardList;