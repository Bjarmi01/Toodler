import { StyleSheet } from "react-native";
import { greenBlueDark } from "../../styles/colors";

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: greenBlueDark,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginTop:10,
        marginHorizontal:10
    },
    toolbarAction: {
        flex: 1,
        alignItems: 'center',
    },

    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 10
    }
});