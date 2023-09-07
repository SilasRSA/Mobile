import React, { useState } from 'react';
import { Container, StyleSheet, Header, Content, Form, Item, InputText, Text } from 'native-base';

export default function app() {
  const [name, setName] = useState('');
  return (
    <Container>
      <Header />
      <Content>
        <Text style={{fontWeight:'bold'}}>What is your name?</Text>
        <Form>
          <Item last> 
            <InputText
              placeholder='John Bunyan'
              onChangeText={text => setName(text)}
            />
          </Item>
        </Form>
        <Text style={{fontWeight:'bold',color:'#00ffff', alignSelf:'center'}}>Say hello {name}</Text>
      </Content>
    </Container>
  );
}