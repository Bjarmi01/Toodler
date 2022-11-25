import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export const ListToolbar = ({onCreateList , navigation, hasListSelected, deleteList}) => {
    return (
        <View style={styles.toolbar}>
            <TouchableHighlight 
                                style={styles.toolbarAction}
                                onPress={onCreateList} >
                <Text style={styles.toolbarActionText} >Create List</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                        style={styles.toolbarAction} 
                        disabled={!hasListSelected}
                        onPress={deleteList}
                    >
                <Text style={[styles.toolbarActionText, !hasListSelected ? { color: "rgba(156, 156, 156, .9)"}: {}]} >Delete List</Text>
            </TouchableHighlight>
        </View>
    );
}

export default ListToolbar;