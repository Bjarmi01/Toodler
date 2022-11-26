import { StyleSheet } from 'react-native';
import { greenBlueLight } from '../../styles/colors';

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
        flex: 1,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'center',
        textAlign: 'center',
    },
    listName: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    isSelectedList: {
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

});