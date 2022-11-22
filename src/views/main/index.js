import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import BoardList from "../../components/boardList";
import * as data from "../../../data.json";


export const Main = () => {
    return (
        <View >
            <Toolbar />
            <BoardList 
                {...data}
            />
        </View>
    );
};

export default Main;