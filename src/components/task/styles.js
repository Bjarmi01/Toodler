import { StyleSheet } from "react-native";

export default StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        width: "85%"
    },
    
    taskText: {
        padding: 8,
        width: '95%',
        height: "auto",
    },
    taskName: {
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 'bold',

    },
    taskDescription: {
        fontStyle: 'italic',
    },
    checkboxContainer: {
        padding: 2,
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    trashIcon: {
        padding: 2,
        marginTop: 15,
    },

    editActionBtns: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 25,
    },

    actionBtns: {
        padding: 2,
        marginTop: 15,
    
    },

    


});