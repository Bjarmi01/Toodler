import React from "react";
import { View, Text, FlatList } from "react-native";
import { Board } from "../board";
import styles from "./styles";
import List from "../list";
import listByBoardId from '../list'

export const BoardList = ({boards, lists, tasks, onLongPress, selectedBoards}) => {
    console.log(boards)
    console.log(lists)
    return (
        <View style={styles.list}>
            <FlatList  
                data={boards}
                renderItem={({item}) => (
                                <Board 
                                onLongPress={onLongPress}
                                isSelected={selectedBoards.includes(item.id)}
                                board={item} 
                                lists={lists} 
                                tasks={tasks} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
 
export default BoardList;