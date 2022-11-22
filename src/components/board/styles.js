import { StyleSheet } from 'react-native';
import { greenBlueLight } from '../../styles/colors';

export default StyleSheet.create({
    board: {
        width: "auto",
        height: 200,
        alignContent: 'center',
        backgroundColor: "white",
        
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        margin: 10,
        
    },
    boardImage: {
        width: 40,
        height: 40,
        borderRadius: 20

    }

});
