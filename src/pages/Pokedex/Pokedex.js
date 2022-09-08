import { SafeAreaView, Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { API } from '../../services/api'

export default function Pokedex({navigation}) {

  const [pokemons, setPokemons] = useState([])

  function navigateToDetailsPokemon(pokemon) {
    navigation.navigate('Details', {pokemon})
  }


  useEffect(() => {
    fetch(API + '/pokemons?_limit=10')
      .then(async (response) => {
        const data = await response.json()
        setPokemons(data)
      })
      .catch(() => console.log('Houve ao tentar mostrar o pokedex'))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerPokemon} >
          {pokemons.map(pokemon => (
            <TouchableOpacity key={pokemon.id} style={styles.cardPokemon} onLongPress={() => navigateToDetailsPokemon(pokemon)}>
              <Image source={{ uri: pokemon.image.thumbnail }} style={{ width: 50, height: 50 }} />
              <Text>{pokemon.name.english}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  containerPokemon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  cardPokemon: {
    width: '40%',
    margin: 10,
    height: 80,
    backgroundColor: '#CCC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})