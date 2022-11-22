import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export const Board = ({ board, lists, tasks }) => {
    console.log(board.thumbnailPhoto);
    return (
        <View style={styles.board}>
            <Image 
                style={styles.boardImage}
                resizeMode="cover"
                source={{ uri: board.thumbnailPhoto }} />
            <Text>{board.name}</Text>
            
        </View>
    )}; 

export default Board;