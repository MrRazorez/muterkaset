import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from './Playlist';
import { Player } from './Player';

const Stack = createNativeStackNavigator();

export const Home = () => {
    return (
        <Stack.Navigator initialRouteName='Playlist' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Playlist' component={List}/>
            <Stack.Screen name='Media' component={Player}/>
        </Stack.Navigator>
    )
}