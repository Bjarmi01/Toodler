import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import BoardList from "../../components/boardList";
import Board from "../../components/board";
import * as data from "../../../data.json";
import ListToolbar from "../../components/listToolbar";
import List from "../../components/list";


export const Main = ({navigation}) => {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    const [selectedBoards , setSelectedBoards] = useState([]); 
    const [isCreatingBoard, setIsCreatingBoard] = useState(false);
    const [isCreatingList, setIsCreatingList] = useState(false);
    const [selectedLists , setSelectedLists] = useState([]); 

    const onBoardLongPress = (id) => {
        if(selectedBoards.includes(id)) {
            setSelectedBoards(selectedBoards.filter((board) => board !== id));
        } else {
            
            setSelectedBoards([...selectedBoards, id]);
        }
    };

    const onCreateBoard = () => {
        if (!isCreatingBoard) {
            setIsCreatingBoard(true);
        }
        
    };

    const onCreateBoardCancel = (newBoard) => {
        setIsCreatingBoard(false);
        
    };

    const onBoardSubmit = (newBoard) => {
        setBoards([...boards, newBoard]);
        setIsCreatingBoard(false);
        console.log("New board created");
    };

    const deleteBoard = () => {
        setBoards(boards.filter((board) => !selectedBoards.includes(board.id)));
        /*Hér vantar að eyða lists og tasks*/
        // for list in lists if list.boardId in selectedBoards then call deleteList(list.id)
        lists.filter((list) => selectedBoards.includes(list.boardId)).forEach((list) => deleteList(list.id));
        setSelectedBoards([]);
    
    }

    const onListLongPress = (id) => {
        if(selectedLists.includes(id)) {
            setSelectedLists(selectedLists.filter((list) => list !== id));
        } else {
            
            setSelectedLists([...selectedLists, id]);
        }
    };

    const onCreateList = () => {
        if (!isCreatingList) {
            setIsCreatingList(true);
        }
        
    };

    const onCreateListCancel = (newList) => {
        setIsCreatingList(false);
        
    };

    const onListSubmit = (newList) => {
        setLists([...lists, newList]);
        setIsCreatingList(false);
        console.log("New list created");
    };

    const deleteList = (id) => {
        setLists(lists.filter((list) => !selectedLists.includes(list.id)));
        console.log("deleteList", id);
        tasks.filter((task) => selectedLists.includes(task.listId)).forEach((task) => deleteList(task.id));
        setSelectedLists([]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        console.log("deleteTask", id);
    }

    

    return (
        <View >
            <Toolbar onCreateBoard={()=> onCreateBoard()} navigation={navigation} deleteBoard={() => deleteBoard()} hasBoardSelected={selectedBoards.length > 0}/>
            <BoardList 
                onLongPress={id => onBoardLongPress(id)}
                onCreateBoardCancel={() => onCreateBoardCancel()}
                onBoardSubmit={(newBoard) => onBoardSubmit(newBoard)}
                isCreatingBoard={isCreatingBoard}
                selectedBoards={selectedBoards}
                onListLongPress={id => onListLongPress(id)}
                onCreateListCancel={() => onCreateListCancel()}
                onListSubmit={(newList) => onListSubmit(newList)}
                isCreatingList={isCreatingList}
                selectedLists= {selectedLists}
                boards={boards}
                lists={lists}
                tasks={tasks}
            />
        </View>
    );
};

export default Main;