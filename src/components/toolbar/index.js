import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";

export const Toolbar = ({onCreateBoard , navigation, hasBoardSelected, deleteBoard}) => {
    return (
        <View style={styles.toolbar}>
            <TouchableHighlight 
                                style={styles.toolbarAction}
                                onPress={onCreateBoard} >
                <Octicons name="diff-added" style={styles.toolbarIcons}/>
            </TouchableHighlight>
            <TouchableHighlight 
                        style={styles.toolbarAction} 
                        disabled={!hasBoardSelected}
                        onPress={deleteBoard}
                       >
            {
                hasBoardSelected 
                ?
                <Octicons 
                    name="trash" 
                    style={styles.toolbarIcons}/>
                :
                <></>   
                }
            </TouchableHighlight>
        </View>
    );
}

export default Toolbar;