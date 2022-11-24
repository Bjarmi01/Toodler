import React from "react";
import { View, Text, Image, FlatList} from "react-native";
import styles from "./styles";

export const List = ({ board, list, tasks }) => {

    return (
        <View style={styles.listContainer}>
            <View style={styles.list}>
                <Text>{list.name}</Text>      
            </View>
        </View>
    )}; 

export default List;


