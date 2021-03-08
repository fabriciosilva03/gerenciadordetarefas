import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard, 
} from 'react-native';

import {Ionicons, MaterialIcons} from "@expo/vector-icons"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import PrimeiroComponte from './src/PrimeiroComponte/index'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
  const [task, setTask] = useState(['alisson' , 'renam', 'macedo']);
  const [newTask, setNewTask] = useState('');

async function addTask(){

  setTask([ ... task , newTask]);
  setNewTask("");

  Keyboard.dismiss();
}

{/*
useEffect(() => {
  console.log(newTask);
}, [newTask]);
*/}

  return (

    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{flex: 1}}
        enabled={Platform.OS === 'ios'}
      >
      <View style={styles.container}>
        
        <View style={styles.Body}>
          
          <FlatList 
            style={styles.FlatList}
            data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>  (
              <View style={styles.ContainerView}>
                <Text style={styles.Texto}>{item}</Text>
                <TouchableOpacity>
                    <MaterialIcons name="delete-forever" size={25} color="#f64c75" />
                </TouchableOpacity>
              </View>
            )}
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
          onChangeText={text => setNewTask(text)}
          value={newTask}
          />

          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
            <Ionicons name="add" size={25} color="#FFF" />
          </TouchableOpacity>

        </View>
      </View>
      </KeyboardAvoidingView>
    </>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
 
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
      backgroundColor: '#EEE8AA',

    },
    Input: {
      flex: 1,
      height: 40,
      backgroundColor: '#FFF',
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
    ContainerView:{
      marginBottom: 15,
      padding: 15,
      borderRadius: 4,
      backgroundColor: "#F8F8FF",

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#eee"
    },
    Texto: {
      fontSize: 14,
      color: '#333',
      fontWeight: "bold",
      marginTop: 4,
      textAlign: "center",
    }
    
});
