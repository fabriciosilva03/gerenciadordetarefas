import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList, 
} from 'react-native';

import {Ionicons, MaterialIcons} from "@expo/vector-icons"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import PrimeiroComponte from './src/PrimeiroComponte/index'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
  const [task, setTask] = useState(['alisson' , 'renam', 'macedo']);
  const [newTask, setNewTask] = useState('');

  return (

    <>
      <View style={styles.container}>
        
        <View style={styles.Body}>
          
          <FlatList 
          style={styles.FlatList}
          data={task}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>  <Text >{item}</Text>}
          />  
          
          <StatusBar  backgroundColor= '#050025' style="light"  />  
        </View>
        
        <View style={styles.Form}>
          
          <TextInput 
          style={styles.Input}
          placeholderTextColor="#999"
          autoCorrect={true}
          placeholder="Adicione uma tarefa"
          maxLength={25}
          />

          <TouchableOpacity style={styles.Button}>
            <Ionicons name="add" size={25} color="#FFF" />
          </TouchableOpacity>

        </View>
      </View>

    </>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050025',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
 
  },
    text: {
      color: '#fff',
    },
    Body: {
      flex: 1,
    },
    Form: {
      padding: 0,
      height: 60,
      justifyContent: 'center',
      alignSelf: 'stretch',
      flexDirection: 'row',
      paddingTop: 13,
      borderTopWidth: 1,
      borderColor: '#eee',
      backgroundColor: '#777',

    },
    Input: {
      flex: 1,
      height: 40,
      backgroundColor: '#eee',
      borderRadius: 4,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#eee"
    },
    Button: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1c6cce',
      borderRadius: 4,
      marginLeft: 10,
    },
    FlatList: {
      flex: 1,
      marginTop: 1,
      
    },

});
