import React, { useState } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import axios from 'axios';

const App = () => {
  return (
    <View style={styles.container}>
        <Text>aaa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;