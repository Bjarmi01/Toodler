import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";

const CreateBoard = () => {
    return (
        <View>
            <Text>Create New Board</Text>
            <TextInput placeholder="Board Name" />
            <TextInput placeholder="Image URL" />

        </View>
    )
};

export default CreateBoard;