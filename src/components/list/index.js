import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import * as data from '../../../data.json'

export const List = ({ board, lists, tasks }) => {
    console.log(board.thumbnailPhoto);

    return (
        <View style={styles.board}>
            <Text>{lists.name}</Text>          
        </View>
    )}; 

export default List;

const listByBoardId = data.lists.filter(list => list.boardId === board);

