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
        margin: 10,
       
        
    },
    isSelectedBoard: {
        width: "auto",
        height: 200,
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
        marginLeft: 20,
        width: "auto",
    },
    boardInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',

    },
    editIcon: {
        fontSize: 20,
        justifyContent: 'center',
        paddingBottom: 10,
        
    
    },
    actionIcon: {
        fontSize: 25,
        justifyContent: 'center',
        paddingBottom: 10,
        marginLeft: 15,
    
    },

    boardNameInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: greenBlueDark,
        marginBottom: 10,
        width: "60%",

    },


    

});
