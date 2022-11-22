import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";

export const Main = () => {
    return (
        <View >
            <Toolbar />
            <Text>Hi</Text>
        </View>
    );
};

export default Main;