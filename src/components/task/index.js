import react, { useState } from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import { Octicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import styles from "./styles";

export const Task = ({ deleteTask, updateTaskStatus, task} ) => {
    const [isDone, setIsDone] = useState(task.isFinished);

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

    return (
        <View style={styles.taskContainer}>
            <View>
                <TouchableOpacity 
                            onPress={handleDelete}>
                <Octicons style={styles.trashIcon}name="trash" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.taskText}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                value={isDone}
                onValueChange={handleCheckbox}
               />
            </View>
            
            
        </View>
    )
}

export default Task;