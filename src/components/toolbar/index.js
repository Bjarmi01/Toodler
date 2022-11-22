import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export const Toolbar = () => {
    return (
        <View style={styles.toolbar}>
            <TouchableHighlight style={styles.toolbarAction} >
                <Text style={styles.toolbarActionText} >Create Board</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.toolbarAction} >
                <Text style={styles.toolbarActionText} >Delete Board</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Toolbar;