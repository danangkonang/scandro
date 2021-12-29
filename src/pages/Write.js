/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  React.useEffect(() => {
    console.log('oke');
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('URL');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const sendData = async () => {
    const res = await fetch('http://192.168.0.207:9005', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const response = await res.json();
    console.log(response);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={sendData}
        style={{backgroundColor: 'tomato', padding: 20}}>
        <Text>App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
