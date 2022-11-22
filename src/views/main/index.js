import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import BoardList from "../../components/boardList";
import * as data from "../../../data.json";


export const Main = () => {
    const [boards, setBoards] = useState(data.boards);
    const [selectedBoards , setSelectedBoards] = useState([]); 

    const onBoardLongPress = (id) => {
        if(selectedBoards.includes(id)) {
            setSelectedBoards(selectedBoards.filter((board) => board !== id));
        } else {
            
            setSelectedBoards([...selectedBoards, id]);
        }
    };

    return (
        <View >
            <Toolbar />
            <BoardList 
                onLongPress={id => onBoardLongPress(id)}
                selectedBoards={selectedBoards}
                {...data}
            />
        </View>
    );
};

export default Main;