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

    const onCreateBoardCancel = () => {
        setIsCreatingBoard(false);
        
    };

    const onBoardSubmit = (newBoard) => {
        setBoards([...boards, newBoard]);
        setIsCreatingBoard(false);
        console.log("New board created", newBoard);
    };

    const deleteBoard = () => {
        setBoards(boards.filter((board) => !selectedBoards.includes(board.id)));
        const bla = lists.filter((list) => selectedBoards.includes(list.boardId))
        deleteLists(bla);
        setSelectedBoards([]);
    
    }
    const deleteLists = (listslist) => {
        setLists(lists.filter((list) => !listslist.includes(list)));
        
    }

    const onListSubmit = (newList) => {
        setLists([...lists, newList]);
        setIsCreatingList(false);
        console.log("New list created", newList);
    };

    const deleteList = (id) => {
        const newLists = lists.filter((list) => list.id !== id); 
        setLists(newLists);
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

    };

    const onTaskSubmit = (newTask) => {
        setTasks([...tasks, newTask]);
        console.log("New task created", newTask);
    };

    const updateList = (updatedList) => {
        const newLists = lists.map((list) => {
            if(list.id === updatedList.id) {
                return updatedList;
            } else {
                return list;
            }
        })
        setLists(newLists);
    };

    return (
        <View >
            <Toolbar onCreateBoard={()=> onCreateBoard()} deleteBoard={() => deleteBoard()} hasBoardSelected={selectedBoards.length > 0}/>
          
            <BoardList 
                onLongPress={id => onBoardLongPress(id)}
                onCreateBoardCancel={() => onCreateBoardCancel()}
                onBoardSubmit={(newBoard) => onBoardSubmit(newBoard)}
                updateBoard={(updatedboard) => updateBoard(updatedboard)}
                isCreatingBoard={isCreatingBoard}
                selectedBoards={selectedBoards}
                onListSubmit={(newList) => onListSubmit(newList)}
                boards={boards}
                lists={lists}
                tasks={tasks}
                updateTaskStatus={(updatedTask) => updateTaskStatus(updatedTask)}
                deleteTask={(id) => deleteTask(id)}
                updateTask={(updatedTask) => updateTask(updatedTask)}
                onTaskSubmit={(newTask) => onTaskSubmit(newTask)}
                deleteList={(id) => deleteList(id)}
                updateList={(updatedList) => updateList(updatedList)}
            />
        </View>
    );
};

export default Main;