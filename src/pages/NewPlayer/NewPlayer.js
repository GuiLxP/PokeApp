import { ScrollView, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

import { commonStyles } from '../../styles/CommonStyles'

export default function NewPlayer({ navigation }) {

  function navigateToPokemon() {
    navigation.navigate('ChoisePokemon')
  }

  return (
    <ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nickname"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='number-pad'
        maxLength={3}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu telefone"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='phone-pad'
      />


      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        secureTextEntry
      />

      <TextInput
        style={{ ...styles.input, ...styles.inputTextarea }}
        placeholder="Digite sua frase de efeito"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        multiline
      />

      <TouchableOpacity
        onPress={navigateToPokemon}
        style={{ ...commonStyles.button, alignSelf: 'center' }}>
        <Text style={commonStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    borderColor: '#0D4DA3',
    borderWidth: 2,
    alignSelf: 'center',
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#0D4DA3'
  },
  inputTextarea: {
    height: 80,
    textAlignVertical: 'top',
    textAlign: 'auto',
    padding: 5
  }
})
