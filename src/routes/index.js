import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from '../views/main';
import CreateBoard from '../views/createBoard';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Boards" component={Main} />
            <Stack.Screen name="CreateBoard" component={CreateBoard} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;