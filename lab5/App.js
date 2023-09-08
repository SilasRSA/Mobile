import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Header, Content, } from 'native-base';
import { StyleSheet, Text, View, Button} from 'react-native';
import Keyboard from './components/Keyboard';


export default function App(props) {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Header />
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: '#f0ffff'}}></View>
        <View style={{flex: 3, backgroundColor: '#0000ff'}}><Keyboard/></View>
      </View>
    </Container>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:"#fff",
  },
});