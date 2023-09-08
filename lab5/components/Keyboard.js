import React, {useState, onPress} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Content, Header } from 'native-base';
import { StyleSheet, Text, View, Button, Input, Form} from 'react-native';

export default function Keyboard(props) {
    const [cont, setCont] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
  
    return (
        <Container style={styles.container}>
            <Text>{cont}</Text>
            <View style={styles.view}> 
                <Text onPress={() => setCont('')} style={styles.box} backgroundColor="#00ffff">AC</Text>
                <Text onPress={() => setCont('')}style={styles.box} backgroundColor="#00ffff">x</Text>
                <Text onPress={() => setCont(cont/100)} style={styles.box} backgroundColor="#00ffff">%</Text>
                <Text onPress={() => setCont('/')} style={styles.box} backgroundColor="#ffa500">/</Text>
            </View>
            <View style={styles.view}> 
                <Text onPress={() => setCont(7)} style={styles.box} backgroundColor="#00ffff">7</Text>
                <Text onPress={() => setCont(8)} style={styles.box} backgroundColor="#00ffff">8</Text>
                <Text onPress={() => setCont(9)} style={styles.box} backgroundColor="#00ffff">9</Text>
                <Text onPress={() => setCont('*')} style={styles.box} backgroundColor="#ffa500">*</Text>
            </View>
            <View style={styles.view}> 
                <Text onPress={() => setCont(4)} style={styles.box} backgroundColor="#00ffff">4</Text>
                <Text onPress={() => setCont(5)} style={styles.box} backgroundColor="#00ffff">5</Text>
                <Text onPress={() => setCont(6) }style={styles.box} backgroundColor="#00ffff">6</Text>
                <Text onPress={() => setCont('-')}style={styles.box} backgroundColor="#ffa500">-</Text>
            </View>
            <View style={styles.view}> 
                <Text onPress={() => setCont(1)} style={styles.box} backgroundColor="#00ffff">1</Text>
                <Text onPress={() => setCont(2)} style={styles.box} backgroundColor="#00ffff">2</Text>
                <Text onPress={() => setCont(3)} style={styles.box} backgroundColor="#00ffff">3</Text>
                <Text onPress={() => setCont('+')}style={styles.box} backgroundColor="#ffa500">+</Text>
            </View>
            <View style={styles.view}> 
                <Text onPress={() => setCont('?')} style={styles.box} backgroundColor="#00ffff">?</Text>
                <Text onPress={() => setCont(0)} style={styles.box} backgroundColor="#00ffff">0</Text>
                <Text onPress={() => setCont('.')} style={styles.box} backgroundColor="#00ffff">.</Text>
                <Text onPress={() => setCont('=')} style={styles.box} backgroundColor="#ffa500">=</Text>
            </View>
        </Container>
      );
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
      },
      view:{
        flex: 2,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        },
        box:{
          flex: 3,
          padding: '7%',
          paddingEnd:'auto'
        }
});
