import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import List from "../list";
import ListToolbar from "../listToolbar";
import Main from "../../views/main";

export const Board = ({ board, lists, tasks, onLongPress, isSelected}) => {
    const listByBoardId = lists.filter(list => list.boardId === board.id);

    return (
        <View>
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
                            numColumns={3}
                            data={listByBoardId}
                            renderItem={({item}) => (<List board={board} list={item} tasks={tasks} />)}
                            keyExtractor={(item) => item.id}/>
                </View> 
                
            </TouchableOpacity>
        </View>

    )}; 

export default Board;