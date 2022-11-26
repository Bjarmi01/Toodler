import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Button } from "react-native";
import { TextInput, Divider } from "@react-native-material/core";
import { Octicons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import Task from "../task";
import { greenBlueDark } from "../../styles/colors";


export const List = ({onDeleteList, updateTask, deleteTask, updateTaskStatus ,board, list, tasks, lists, onTaskSubmit, updateList }) => {
    const taskByListId = tasks.filter(task => task.listId === list.id);
    const [newTaskName, setNewTaskName] = useState("");
    const [listName, setListName] = useState(list.name);
    const [listColor, setListColor] = useState(list.color);
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [isEditingList, setIsEditingList] = useState(false);
   

    
    const handleCreateTask = () => {
        const newTask = {
            id: tasks.length + 1,
            name: newTaskName,
            description: newTaskDescription,
            listId: list.id,
            isFinished: false,
        };
        onTaskSubmit(newTask);
        setNewTaskDescription("");
        setNewTaskName("");
        setIsAddingTask(false);
    };

    const handleEditList = () => {
        const newList = {
            id: list.id,
            name: listName,
            color: listColor,
            boardId: list.boardId,
        };
        updateList(newList);
        setListName("");
        setListColor("");
        setIsEditingList(false);
    };

    return (
        
        <View style={styles.listContainer}>
            
                <View>
                    <View style={styles.listHeader}>
                        <Octicons 
                                name="square-fill" 
                                size={24}
                                style={[styles.colorSquare, {color: (list.color.toLowerCase()==="#ffffff" || list.color==="") ? "black" : list.color}]}
                                />
                        

                        <Text style={styles.listName}>{list.name}</Text>

                        <TouchableOpacity
                                        onPress={() => setIsEditingList(true)}>
                            <AntDesign 
                                        name="edit" 
                                        size={16}
                                        style={styles.editIcon}
                                        color="grey" />
                        </TouchableOpacity>
                        
                       
                    
                    </View>
                    
                    
                </View>
                {
                    isEditingList
                    ? 
                    <View>
                        <Text>Edit List</Text>
                        <TextInput 
                            label="List Name"
                            value={listName}
                            onChangeText={(text) => setListName(text)}

                        />
                        <TextInput 
                            label="List Color"
                            value={listColor}
                            onChangeText={(text) => setListColor(text)} />
                        <Button
                            title="Save"
                            onPress={() => {handleEditList()}} />
                        <Button 
                            title="Cancel"
                            onPress={() => setIsEditingList(false)} 
                            color="grey" />
                        <Button 
                            title="Delete List"
                            onPress={() => onDeleteList(list.id)}
                            color="red" />


                    </View>
                    :
                    <></>
                }
                
                {
                    isAddingTask 
                    ? 
                    <View>
                        <Text>Create new Task</Text>
                        <TextInput 
                            style={styles.taskNameInput}
                            value={newTaskName}
                            onChangeText={setNewTaskName}
                            label="Task Name"
                            color={greenBlueDark}
                        />
                        <TextInput
                            style={styles.taskNameInput}
                            value={newTaskDescription}
                            onChangeText={setNewTaskDescription}
                            label="Task Description"
                            color={greenBlueDark}
                        />
                        <View >
                                <Button
                                    title="Create Task"
                                    onPress={handleCreateTask}
                                    color={greenBlueDark}
                                />
                                <Button
                                    title="Cancel"
                                    onPress={() => setIsAddingTask(false)}/>
                            </View>  
                    </View>
                    :
                    <>
                    {
                        isEditingList
                        ?
                        <></>
                        :
                        <Button
                        style={styles.addTaskButton}
                        onPress={() => setIsAddingTask(true)}
                        title="Add Task"
                        />
                        
                    }  
                    
                    </>
                        
                }
                <Divider
                style={[styles.divider, {backgroundColor: (list.color.toLowerCase()==="#ffffff" || list.color===undefined) ? "black" : list.color}]}
            />
                <FlatList
                    data={taskByListId}
                    renderItem={({ item }) => <Task 
                                                task={item} 
                                                updateTaskStatus={updateTaskStatus} 
                                                deleteTask={deleteTask} 
                                                updateTask={updateTask} 
                                                lists={lists} />}
                    keyExtractor={item => item?.id}
                    />
                 <Divider
                        style={[styles.divider, {backgroundColor: (list.color.toLowerCase()==="#ffffff" || list.color===undefined) ? "black" : list.color}]}/>
            </View>
          
    )}; 

export default List;


