import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <Text> Is it working...</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 10, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


    

  },
});



