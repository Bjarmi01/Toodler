import { StyleSheet } from 'react-native';
import { greenBlueLight, greenBlueDark } from '../../styles/colors';

export default StyleSheet.create({
    board: {
        flex: 1,
        width: "auto",
        height: "auto",
        textAlign: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        marginBottom: 10,
        marginHorizontal:10
    },
    isSelectedBoard: {
        width: "auto",
        height: 'auto',
        alignContent: 'center',
        backgroundColor: "white",
        opacity: .9,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        marginBottom:10,
        marginHorizontal:10
        
    },
    checkmark: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontSize: 16
    },
    boardImage: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 20,
        margin: 10,
    },
    boardName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: greenBlueDark,
        marginBottom: 10,
    },

});
