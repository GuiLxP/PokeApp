import { View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import { API } from '../../services/api';

export default function Home() {

  const [myLocation, setMyLocation] = useState(null)
  const [pokemons, setPokemons] = useState([])

  function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        alert('Permissão negada. Não conseguiros habilitar o recurso de mapa.')
      }

      const location = await Location.getCurrentPositionAsync({});

      setMyLocation({
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      })
    }
    getPermission()
  }, [])


  useEffect(() => {
    fetch(API + '/pokemons?_limit=200')
      .then(async (response) => {
        const data = await response.json()
        setPokemons(data)
      })
      .catch(() => console.log('Houve ao tentar mostrar o pokedex'))
  }, [])


  return (
    <View style={styles.container}>
      {myLocation !== null && (
        <MapView
          initialRegion={myLocation}
          style={styles.map}
          zoomControlEnabled
          provider='google'
        >
          {
            pokemons.map((pokemon) => (
              <Marker
              
                key={pokemon.id}
                draggable
                coordinate={{
                  latitude: getRandomInRange(-60, 180, 3),
                  longitude: getRandomInRange(-60, 180, 3),
                }}
                title={pokemon.name.english}
                description={pokemon.description}
                image={{
                  uri: pokemon.image.thumbnail
                }}
              />
            ))
          }

        </MapView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})
