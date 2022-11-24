import React from "react";
import { View, Text, Image, FlatList} from "react-native";
import styles from "./styles";

export const List = ({ board, list, tasks }) => {

    return (
        <View style={styles.listContainer}>
            <View style={{backgroundColor: list.color, padding:8, width: '90%',
    height: 50,borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    margin: 5, borderColor: 'black', borderWidth: 1}}>
                <Text>{list.name}</Text>      
            </View>
        </View>
    )}; 

export default List;


