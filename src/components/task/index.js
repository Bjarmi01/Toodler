import react, { useState } from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import { Octicons, Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import styles from "./styles";
import { TextInput } from '@react-native-material/core';
import { SelectList } from 'react-native-dropdown-select-list';

export const Task = ({ lists, updateTask, deleteTask, updateTaskStatus, task} ) => {
    const [isDone, setIsDone] = useState(task.isFinished);
    const [isEditingTask, setIsEditingTask] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [list, setList] = useState(task.listId);

    const otherLists = lists.map(list => {
        if (list.id === task.listId) {
            return {key: list.id, value: list.name, disabled: true}
        } else {
            return {key: list.id, value: list.name}
        }
    })

    const handleCheckbox = () => {
        setIsDone(!isDone);
        const newTask = {
            ...task,
            isFinished: !isDone,
        }
        updateTaskStatus(newTask);
    }

    const handleDelete = () => {
        deleteTask(task.id);
    }

    const handleUpdateTask = () => {
        console.log(list);
        const updatedTask = {
            id: task.id,
            name: taskName,
            description: taskDescription,
            isFinished: isDone,
            listId: list,
        }
        
        setTaskName("");
        setTaskDescription("");
        setIsEditingTask(false);
        updateTask(updatedTask);
    }


    return (
        <View>
        
        {
            isEditingTask
            ?
            <View>
                <View style={styles.taskText}>
                    <TextInput 
                            color="#000" 
                            label="Task Name"
                            style={styles.taskNameInput} 
                            variant="standard" 
                            value={taskName}
                            onChangeText={setTaskName} />
                    <TextInput 
                            color="#000" 
                            label='Description'
                            style={styles.taskNameInput} 
                            variant="standard" 
                            value={taskDescription}
                            onChangeText={setTaskDescription}/>
                </View>
                <Text>Move To:</Text>
                <SelectList 
                    data={otherLists}
                    setSelected={(val) => setList(val)} 
                    save="key"
                    
                />
                <View style={styles.editActionBtns}>
                    <View style={styles.trash}>
                        <TouchableOpacity 
                                    onPress={handleDelete}>
                            <Octicons style={styles.actionBtns} name="trash" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.confirmCancelBtns}>
                        <TouchableOpacity onPress={handleUpdateTask}>
                            <Entypo style={styles.actionBtns} name="check" size={24} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsEditingTask(false)}>
                            <Entypo style={styles.actionBtns} name="cross" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            :
            <View style={styles.taskContainer}>
                <View>
                    <TouchableOpacity 
                                onPress={() => setIsEditingTask(true)}>
                    <Entypo style={styles.trashIcon} name="dots-two-vertical" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={styles.taskText}>
                    <Text style={styles.taskName}>{task.name}</Text>
                    <Text style={styles.taskDescription}>{task.description}</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                    value={isDone}
                    onValueChange={handleCheckbox}/>
                </View>
            </View>
        }
        </View>
    )
}

export default Task;
