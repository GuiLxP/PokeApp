import { TextInput, Text, ImageBackground, StyleSheet } from 'react-native';

import FundoApp from './assets/bg.jpg'

export default function App() {
  return (
    <ImageBackground
      source={FundoApp}
      style={styles.background}
      resizeMode="stretch"
    >
      <TextInput
        style={styles.input}
        placeholder="Digite seu nickname"
        placeholderTextColor="#DC5F43"
        selectionColor="#DC5F43"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#DC5F43"
        selectionColor="#DC5F43"
        secureTextEntry
      />
      <Text style={styles.callToActionText}>Ainda não tem cadastro ? </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    height: 50,
    width: '70%',
    borderColor: '#DC5F43',
    borderWidth: 3,
    borderRadius: 10,
    textAlign: 'center',
    color: '#DC5F43',
    marginVertical: 10
  },
  callToActionText: {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 16
  }
})


