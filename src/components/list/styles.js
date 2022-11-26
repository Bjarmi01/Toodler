import { StyleSheet } from 'react-native';
import { greenBlueDark } from '../../styles/colors';

export default StyleSheet.create({
    /*list: {
        padding: 8,
        width: '90%',
        height: 50,
        alignContent: 'center',
        backgroundColor: greenBlueLight,

        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        margin: 5,
    },*/
    listContainer:{
        margin: 20,
        flex: 1,
        
        
    },
    listName: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        
        
    },
    addTaskButton: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        
    }, 

    taskNameInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: greenBlueDark,
        marginBottom: 10,
        width: "auto",

    },
    trashIcon: {
        fontSize: 18,
        alignSelf: 'flex-end',
        paddingLeft: 10,
        

        
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
       
    },

    colorSquare: {
        width: 20,
        height: 20,
        marginTop: 3,

    },

    editIcon: {
        width: 15,
        height: 15,
        marginTop: 7,
        
        marginLeft: 10,

    },

    divider: {
        height: 3,
        width: "80%",
        borderRadius: 5,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
    },

});