import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export const Toolbar = ({onCreateBoard , navigation, hasBoardSelected, deleteBoard}) => {
    return (
        <View style={styles.toolbar}>
            <TouchableHighlight 
                                style={styles.toolbarAction}
                                onPress={onCreateBoard} >
                <Text style={styles.toolbarActionText} >Create Board</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                        style={styles.toolbarAction} 
                        disabled={!hasBoardSelected}
                        onPress={deleteBoard}
                       >
                <Text style={[styles.toolbarActionText, !hasBoardSelected ? { color: "rgba(156, 156, 156, .9)"}: {}]} >Delete Board</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Toolbar;