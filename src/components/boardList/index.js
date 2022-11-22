import React from "react";
import { View, Text, FlatList } from "react-native";
import { Board } from "../board";
import styles from "./styles";

export const BoardList = ({boards = data.boards, lists=data.lists, tasks=data.tasks}) => {
    console.log(boards)
    return (
        <View>
            <FlatList 
                data={boards}
                renderItem={({item}) => <Board board={item} lists={lists} tasks={tasks} />}
                keyExtractor={item => item.id}

            />
            
        </View>
    );
}
 
export default BoardList;