import { StyleSheet } from "react-native";
import { greenBlueLight } from "../../styles/colors";

export default StyleSheet.create({
    list: {
        backgroundColor: greenBlueLight,
        paddingBottom: 100,
    },
    BoardNameInput: {
        flex: 1,
        marginLeft: 10,
        Color: "black",
        
    },
    buttons: {
        tintColor: "black",
    },
    createBoardContainer: {
        backgroundColor: greenBlueLight,
        height: 300,

    },
    inputFields: {
        backgroundColor: greenBlueLight,
        flex: 1,
        flexDirection: "column",

    },

    createBoardHeader: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },

});