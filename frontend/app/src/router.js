
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import Preload from './pages/preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainTab from './pages/MainTab';

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Preload"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Preload" component={Preload}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="MainTab" component={MainTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;


