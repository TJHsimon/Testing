import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Header from './header';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
          <Header />
          <Button title='Take Picture' onPress={() => navigation.navigate('CameraScreen')}/>
          <Button title='Testing' onPress={() => {
            navigation.navigate('Results')
            }}/> 
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
    margin: 20,
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20,
  },

})
