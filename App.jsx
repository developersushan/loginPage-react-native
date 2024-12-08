import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {  StyleSheet, Text, View }from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
// import HomeScreen from './src/components/HomeScreen';


const RootStack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <RootStack.Navigator
            screenOptions={{
                headerShown:false,
            }}
            >
                <RootStack.Screen name={'Home'} component={HomeScreen}/>
                <RootStack.Screen name={'Login'} component={LoginScreen}/>
                <RootStack.Screen name={'SignUp'} component={SignUpScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create( {
    headingText:{
        color:'#000000',
    },
} )