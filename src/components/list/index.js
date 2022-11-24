import React from "react";
import { View, Text, Image, FlatList} from "react-native";
import styles from "./styles";
import Task from "../task";

export const List = ({ deleteTask, updateTaskStatus ,board, list, tasks }) => {
    const taskByListId = tasks.filter(task => task.listId === list.id);
    return (
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
                renderItem={({ item }) => <Task task={item} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />}
                keyExtractor={item => item?.id}
                 />
        </View>
    )}; 

export default List;


