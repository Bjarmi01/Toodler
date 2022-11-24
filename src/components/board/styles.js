import { StyleSheet } from 'react-native';
import { greenBlueLight } from '../../styles/colors';

export default StyleSheet.create({
    board: {
        width: "auto",
        height: 'auto',
        alignContent: 'center',
        backgroundColor: "white",
        
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        margin: 10,
        
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
        margin: 10,
        
    },
    checkmark: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontSize: 16
    },
    boardImage: {
        width: 40,
        height: 40,
        borderRadius: 20

    },

});
