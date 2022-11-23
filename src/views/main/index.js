import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import BoardList from "../../components/boardList";
import * as data from "../../../data.json";


export const Main = () => {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    const [selectedBoards , setSelectedBoards] = useState([]); 

    const onBoardLongPress = (id) => {
        if(selectedBoards.includes(id)) {
            setSelectedBoards(selectedBoards.filter((board) => board !== id));
        } else {
            
            setSelectedBoards([...selectedBoards, id]);
        }
    };

    const deleteBoard = () => {
        setBoards(boards.filter((board) => !selectedBoards.includes(board.id)));
        /*Hér vantar að eyða lists og tasks*/
        setSelectedBoards([]);
    
    }

    

    return (
        <View >
            <Toolbar deleteBoard={() => deleteBoard()} hasBoardSelected={selectedBoards.length > 0}/>
            <BoardList 
                onLongPress={id => onBoardLongPress(id)}
                selectedBoards={selectedBoards}
                boards={boards}
                lists={lists}
                tasks={tasks}
            />
        </View>
    );
};

export default Main;