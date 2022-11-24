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
        justifyContent: 'center',
        textAlign: 'center',
    },
    listName: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        

        
    },

});