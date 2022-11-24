import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Board } from "../board";
import styles from "./styles";
import { greenBlueDark } from "../../styles/colors";
import { Banner, Button, HStack, TextInput } from "@react-native-material/core";





export const BoardList = ({boards, lists, tasks, onLongPress, selectedBoards, isCreatingBoard, onCreateBoardCancel, onBoardSubmit, updateBoard}) => {
    const [boardName , setBoardName] = useState("");
    const [isBoardNamed, setIsBoardNamed] = useState(false);
    const [imgURL, setImgURL] = useState("");
    
    const createBoard = () => {
        const newBoard = {
            id: boards.length + 1,
            name: boardName,
            thumbnailPhoto: imgURL,
        }
        setIsBoardNamed(false);
        setBoardName("");
        setImgURL("");
        onBoardSubmit(newBoard);
    
    }

    
    return (
        <View style={styles.list}>
            {
                isCreatingBoard && !isBoardNamed 
                ?
                <Banner
                text="Name your new board"
                buttons={
                <HStack spacing={2}>
                    <TextInput 
                            color={greenBlueDark} 
                            style={styles.BoardNameInput} 
                            variant="standard" 
                            onChangeText={(newName) => setBoardName(newName)}
                            />
                    <Button 
                            color="red" 
                            key="Cancel" 
                            variant="text" 
                            title="Cancel" 
                            compact 
                            onPress={onCreateBoardCancel}
                            />
                    <Button 
                            color={greenBlueDark} 
                            key="Next" 
                            variant="text" 
                            title="Next" 
                            compact 
                            onPress={() => setIsBoardNamed(true)}
                            />
                </HStack>
                }
                
                />
                :
                <></>
            }
            {
                isBoardNamed
                ?    
                <Banner
                text="Enter a URL for your image"
                buttons={
                <HStack spacing={2}>
                    <TextInput 
                            color={greenBlueDark} 
                            style={styles.BoardNameInput} 
                            variant="standard" 
                            onChangeText={(newImgURL) => setImgURL(newImgURL)}
                            />
                    <Button 
                            color="red" 
                            key="Back" 
                            variant="text" 
                            title="Back" 
                            compact 
                            onPress={() => setIsBoardNamed(false)}
                            />
                    <Button 
                        color={greenBlueDark} 
                        key="Create" 
                        variant="text" 
                        title="Create" 
                        compact 
                        onPress={() => createBoard()}
                        />
                </HStack>
                }
                />
                :
                <></>
            }

            <FlatList  
                data={boards}
                renderItem={({item}) => (
                                <Board 
                                onLongPress={onLongPress}
                                isSelected={selectedBoards.includes(item.id)}
                                board={item} 
                                lists={lists} 
                                updateBoard={updateBoard}
                                tasks={tasks} />)}
                                
                keyExtractor={(item) => item?.id}
            />
        </View>
    );
};


 
export default BoardList;