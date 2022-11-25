import { StyleSheet } from "react-native";
import { greenBlueDark } from "../../styles/colors";

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: greenBlueDark
    },
    toolbarAction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    toolbarIcons: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        width: "auto",
        marginLeft: "auto",
        marginRight: "auto",
    }
});