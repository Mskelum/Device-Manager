import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">

                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen name="Homescreen" component={Homescreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppHome;
