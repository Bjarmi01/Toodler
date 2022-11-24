import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Board } from "../board";
import styles from "./styles";
import { greenBlueDark } from "../../styles/colors";
import { Banner, Button, HStack, TextInput } from "@react-native-material/core";





export const BoardList = ({boards, lists, tasks, onLongPress, selectedBoards, isCreatingBoard, onCreateBoardCancel, onBoardSubmit, onCreateListCancel, selectedLists, isCreatingList, onListSubmit}) => {
    const [boardName , setBoardName] = useState("");
    const [isBoardNamed, setIsBoardNamed] = useState(false);
    const [imgURL, setImgURL] = useState("");

    const [listName , setListName] = useState("");
    const [isListNamed, setIsListNamed] = useState(false);
    const [listColor, setListColor] = useState("");
    
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

    const createList = () => {
        const newList = {
            id: lists.length + 1,
            name: listName,
            color: listColor,
        }
        setIsListNamed(false);
        setListName("");
        setListColor("");
        onListSubmit(newList);
    
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
            {
                isCreatingList && !isListNamed 
                ?
                <Banner
                text="Name your new List"
                buttons={
                <HStack spacing={2}>
                    <TextInput 
                            color={greenBlueDark} 
                            style={styles.BoardNameInput} 
                            variant="standard" 
                            onChangeText={(newName) => setListName(newName)}
                            />
                    <Button 
                            color="red" 
                            key="Cancel" 
                            variant="text" 
                            title="Cancel" 
                            compact 
                            onPress={onCreateListCancel}
                            />
                    <Button 
                            color={greenBlueDark} 
                            key="Next" 
                            variant="text" 
                            title="Next" 
                            compact 
                            onPress={() => setIsListNamed(true)}
                            />
                </HStack>
                }
                
                />
                :
                <></>
            }
            {
                isListNamed
                ?    
                <Banner
                text="Enter the color you want the list to be"
                buttons={
                <HStack spacing={2}>
                    <TextInput 
                            color={greenBlueDark} 
                            style={styles.ListNameInput} 
                            variant="standard" 
                            onChangeText={(newListColor) => setListColor(newListColor)}
                            />
                    <Button 
                            color="red" 
                            key="Back" 
                            variant="text" 
                            title="Back" 
                            compact 
                            onPress={() => setIsListNamed(false)}
                            />
                    <Button 
                        color={greenBlueDark} 
                        key="Create" 
                        variant="text" 
                        title="Create" 
                        compact 
                        onPress={() => createList()}
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
                                tasks={tasks} />)}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};


 
export default BoardList;