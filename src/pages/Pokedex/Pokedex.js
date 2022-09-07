import { SafeAreaView, Text, ScrollView, View, Image, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { API } from '../../services/api'

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(API + '/pokemons')
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
            <View key={pokemon.id} style={styles.cardPokemon}>
              <Image source={{ uri: pokemon.image.thumbnail }} style={{ width: 50, height: 50 }} />
              <Text>{pokemon.name.english}</Text>
            </View>
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