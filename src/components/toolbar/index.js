import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export const Toolbar = ({hasBoardSelected, deleteBoard}) => {
    return (
        <View style={styles.toolbar}>
            <TouchableHighlight style={styles.toolbarAction} >
                <Text style={styles.toolbarActionText} >Create Board</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                        style={styles.toolbarAction} 
                        disabled={!hasBoardSelected}
                        onPress={deleteBoard}
                       >
                <Text style={[styles.toolbarActionText, !hasBoardSelected ? { color: "rgba(155, 155, 155, .5)"}: {}]} >Delete Board</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Toolbar;