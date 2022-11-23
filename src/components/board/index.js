import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import List from "../list";

export const Board = ({ board, lists, tasks, onLongPress, isSelected }) => {
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
                <Text>{board.name}</Text>
            </View> 
        </TouchableOpacity>
    )}; 

export default Board;