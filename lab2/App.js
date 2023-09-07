import React, { useState } from 'react';
import { Container, Header } from 'native-base';
import { StyleSheet,View, Text, Button} from 'react-native';

export default function App() {
  const [contPressButton, setContPressButton] = useState(0);
  
  return (
   <Container style={{flex:1}}>
    <Header/>
    <View style={styles.view}>
        <Text>You've pressed the button: {contPressButton} time(s)</Text>
        <Button
          title="Press me"
          onPress={() => setContPressButton(contPressButton + 1)}
        />
      </View>
   </Container>
  );
}

const styles = StyleSheet.create({
view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});