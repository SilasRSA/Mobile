import React from 'react';
import { Container, Content, Header } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <Container style={styles.container}>
      <Header />
        <View style={styles.view}> 
          <Text style={styles.box} backgroundColor="#00ffff">Square 1</Text>
          <Text style={styles.box} backgroundColor="#9370db">Square 2</Text>
          <Text style={styles.box} backgroundColor="#ffa500">Square 3</Text>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  view:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    },
    box:{
      padding: '7%',
    }
})