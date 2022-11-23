import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import List from "../list";

export const Board = ({ board, lists, tasks }) => {
    console.log(board.thumbnailPhoto);
    console.log(lists)
    return (
        <View style={styles.board}>
            <Image 
                style={styles.boardImage}
                resizeMode="cover"
                source={{ uri: board.thumbnailPhoto }} />
            <Text>{board.name}</Text>
            <FlatList 
                data={lists}
                renderItem={({item}) => <List lists={item} tasks={tasks} />}
                keyExtractor={item => item.id}
            />
            {/* lists.filter(function(element{return element>2;})); */}
            {/* if ({board.id} === {lists.boardid}) {<Text>{lists.name}</Text>} */}
          
        </View>
        
    )}; 

export default Board;