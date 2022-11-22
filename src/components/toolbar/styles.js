import { StyleSheet } from "react-native";
import { greenBlueDark } from "../../styles/colors";

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 85,
        backgroundColor: greenBlueDark
    },
    toolbarAction: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14
    }
});