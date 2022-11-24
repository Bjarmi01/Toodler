import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import List from "../list";

export const Board = ({ board, lists, tasks, onLongPress, isSelected }) => {
    const listByBoardId = lists.filter(list => list.boardId === board.id);

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
                <Text style={styles.boardName}>{board.name}</Text>
                <FlatList 
                        data={listByBoardId}
                        renderItem={({item}) => (<List board={board} list={item} tasks={tasks} />)}
                        keyExtractor={(item) => item.id}/>
                    
                
            </View> 
            
        </TouchableOpacity>
    )}; 

export default Board;