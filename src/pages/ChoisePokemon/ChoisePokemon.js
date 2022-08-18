import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native'

const larguraDaTela = Dimensions.get('screen').width

export default function ChoisePokemon({ navigation }) {

  const pokemons = [
    {
      name: 'pokemon 1',
      url: 'https://i.pinimg.com/564x/57/dd/c8/57ddc8a96e71075ad261ae71ce89f1d9.jpg'
    },
    {
      name: 'pokemon 2',
      url: 'https://i.pinimg.com/564x/23/51/e5/2351e5be41a619c6fbcd05ea99e965c3.jpg'
    },
    {
      name: 'pokemon 3',
      url: 'https://i.pinimg.com/564x/e3/87/f3/e387f3ac09a93d94a4f10025f60914e6.jpg'
    },
    {
      name: 'pokemon 4',
      url: 'https://i.pinimg.com/564x/79/2e/17/792e17cd41d68a4cbc34406844b6e78f.jpg'
    },
    {
      name: 'pokemon 5',
      url: 'https://i.pinimg.com/564x/85/1c/89/851c89efa58f2e716d862a13cb745ac3.jpg'
    }
  ]

  function clickPokemon(pokemonName) {
    Alert.alert(
      'Aviso',
      pokemonName + ' foi selecionado',
      [
        {
          text: 'Sim',
          onPress: () => navigation.navigate('Terms')
        },
        {
          text: 'Não'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual seu pokemon inicial ?</Text>
      <ScrollView horizontal>

        {pokemons.map((pokemon) => (
          <TouchableOpacity activeOpacity={0.6} onPress={() => clickPokemon(pokemon.name)}>
            <View style={styles.cardPokemon} key={pokemon.name}>
              <Text style={styles.pokemonName}>{pokemon.name}</Text>
              <Image
                source={{ uri: pokemon.url }}
                style={styles.pokemon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D4DA3',
    flex: 1
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  cardPokemon: {
    backgroundColor: '#FFF',
    height: '60%',
    width: larguraDaTela - 40,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5
  },
  pokemonName: {
    color: '#0D4DA3',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  pokemon: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    flexShrink: 1
  }
})
