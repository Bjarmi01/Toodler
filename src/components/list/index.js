import React, { useState }from "react";
import { View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import styles from "./styles";
import Task from "../task";
import Main from "../../views/main";

export const List = ({ updateTask, deleteTask, updateTaskStatus ,board, list, tasks, lists, onLongPressList, isListSelected, selectedLists}) => {
    const taskByListId = tasks.filter(task => task.listId === list.id);
    return (
        <TouchableOpacity onLongPressList={() => onLongPressList(list.id)} >
            <View style={
                        isListSelected
                        ? styles.isSelectedList
                        : styles.list
                        }>
            {
                isListSelected
                    ?
                    <AntDesign name="checkcircleo" style={styles.checkmark} />
                    :
                    <></>
            }
                <View style={styles.listContainer}>
                    <View style={{backgroundColor: list.color, padding:8, width: '90%',
                                    height: 50,borderTopLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopRightRadius: 6,
                                    borderBottomLeftRadius: 6,
                                    margin: 5, borderColor: 'black', borderWidth: 1}}>
                        <Text style={styles.listName}>{list.name}</Text>      
                    </View>
                    <FlatList
                        data={taskByListId}
                        renderItem={({ item }) => <Task task={item} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} updateTask={updateTask} lists={lists} />}
                        keyExtractor={item => item?.id}
                        />
                </View>
            </View>
        </TouchableOpacity>    
    )}; 

export default List;


