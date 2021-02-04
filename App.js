import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';


import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen'


export default function App() {
  return (
    <Screen>
      <ListItem 
        title="My Title" 
        imageComponent={<Icon name="email" size={35} />}
         />
    </Screen>
  );
}


