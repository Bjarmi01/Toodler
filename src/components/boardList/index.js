import React from "react";
import { View, Text, FlatList } from "react-native";
import { Board } from "../board";
import styles from "./styles";
import List from "../list";
import listByBoardId from '../list'

export const BoardList = ({boards = data.boards, lists=data.lists, tasks=data.tasks}) => {
    console.log(boards)
    console.log(lists)
    return (
        <View style={styles.list}>
            <FlatList 
                data={boards}
                renderItem={({item}) => <Board board={item} lists={lists} tasks={tasks} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
 
export default BoardList;