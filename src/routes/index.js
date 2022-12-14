import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from '../views/main';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Boards" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;