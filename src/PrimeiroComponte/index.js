import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function PrimeiroComponte() {
    return (
     
      
      <View>
        <Text style={styles.text}>Hello World!!!</Text>
      </View>
      
      
     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050025',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
      text: {
        color: '#fff',
      },
  });