import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import BoardList from "../../components/boardList";
import * as data from "../../../data.json";


export const Main = ({navigation}) => {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    const [selectedBoards , setSelectedBoards] = useState([]); 
    const [isCreatingBoard, setIsCreatingBoard] = useState(false);

    const onBoardLongPress = (id) => {
        if(selectedBoards.includes(id)) {
            setSelectedBoards(selectedBoards.filter((board) => board !== id));
        } else {
            
            setSelectedBoards([...selectedBoards, id]);
        }
    };

    const updateBoard = (updatedBoard) => {
        const newBoards = boards.map((board) => {
            if(board.id === updatedBoard.id) {
                return updatedBoard;
            } else {
                return board;
            }
        })
        setBoards(newBoards);
    };

    const updateTaskStatus = (updatedTask) => {
        const newTasks = tasks.map((task) => {
            if(task.id === updatedTask.id) {
                return updatedTask;
            } else {
                return task;
            }
        })
        setTasks(newTasks);

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

    const deleteList = (id) => {
        setLists(lists.filter((list) => list.id !== id));
        console.log("deleteList", id);
        tasks.filter((list) => list.listId === id).forEach((task) => deleteTask(task.id));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        
    }

    const updateTask = (updatedTask) => {
        const newTasks = tasks.map((task) => {
            if(task.id === updatedTask.id) {
                return updatedTask;
            } else {
                return task;
            }
        })
        setTasks(newTasks);
        console.log(tasks);

    };

    return (
        <View >
            <Toolbar onCreateBoard={()=> onCreateBoard()} navigation={navigation} deleteBoard={() => deleteBoard()} hasBoardSelected={selectedBoards.length > 0}/>
            <BoardList 
                onLongPress={id => onBoardLongPress(id)}
                onCreateBoardCancel={() => onCreateBoardCancel()}
                onBoardSubmit={(newBoard) => onBoardSubmit(newBoard)}
                updateBoard={(updatedboard) => updateBoard(updatedboard)}
                isCreatingBoard={isCreatingBoard}
                selectedBoards={selectedBoards}
                boards={boards}
                lists={lists}
                tasks={tasks}
                updateTaskStatus={(updatedTask) => updateTaskStatus(updatedTask)}
                deleteTask={(id) => deleteTask(id)}
                updateTask={(updatedTask) => updateTask(updatedTask)}
            />
        </View>
    );
};

export default Main;