import { View, Text, Image, StyleSheet } from 'react-native'

export default function DetailsPokemon({ route }) {

  const { pokemon } = route.params

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemon.image.hires }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.name}>{pokemon.name.english}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text>{pokemon.profile.weight}</Text>
          <Text>Peso</Text>
        </View>
        <View style={styles.info}>
          <Text>{pokemon.profile.height}</Text>
          <Text>Altura</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  name: {
    fontSize: 34,
    color: '#0D4DA3',
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    height: 70,
    width: 70,
    backgroundColor: '#0D4DA3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20
  }
})