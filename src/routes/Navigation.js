import React from 'react';
import { View, Text } from 'react-native/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import SignInScreen from '../screens/SignInScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Sign In'
                // initialRouteName='Dashboard'
            >
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Sign In' component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;