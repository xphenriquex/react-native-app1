import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'

const geraNumeroAleatorio = () => { 
  let num_aleatorio = Math.random();
  num_aleatorio = Math.floor(num_aleatorio * 10);
  alert(num_aleatorio); 
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Gerador de números randômicos</Text>
        <Button title="Gerar um numero randomico" 
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
  }
}
