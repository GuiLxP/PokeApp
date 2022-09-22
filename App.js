import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
<<<<<<< HEAD
const PokedexStack = createStackNavigator()
=======
>>>>>>> ccd4e1775619fa58be005cd4d24fcbf523dbe737

import Login from './src/pages/Login/Login'
import Home from './src/pages/Home/Home'
import NewPlayer from './src/pages/NewPlayer/NewPlayer'
<<<<<<< HEAD
import ChoisePokemon from './src/pages/ChoisePokemon/ChoisePokemon'
import Terms from './src/pages/Terms/Terms'
import Pokedex from './src/pages/Pokedex/Pokedex';
import DetailsPokemon from './src/pages/DetailsPokemon/DetailsPokemon';

function PokedexNavigator() {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="Pokedex"
        component={Pokedex}
      />
      <PokedexStack.Screen name="Details" component={DetailsPokemon} />
    </PokedexStack.Navigator>
  )
}
=======
import ChoosePokemon from './src/pages/ChoosePokemon/ChoosePokemon'
import Terms from './src/pages/Terms/Terms'
>>>>>>> ccd4e1775619fa58be005cd4d24fcbf523dbe737

function HomeNavigator() {
  return (
    <Tab.Navigator>
<<<<<<< HEAD
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen
        name="PokedexStack"
        component={PokedexNavigator} options={
          {
            headerShown: false
          }
        }
      />
=======
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home2" component={Home} />
      <Tab.Screen name="Home3" component={Home} />
>>>>>>> ccd4e1775619fa58be005cd4d24fcbf523dbe737
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={HomeNavigator}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="NewPlayer"
          component={NewPlayer}
          options={{
            title: 'Novo Jogador',
            headerStyle: {
              backgroundColor: '#0D4DA3'
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
<<<<<<< HEAD
          name="ChoisePokemon"
          component={ChoisePokemon}
=======
          name="ChoosePokemon"
          component={ChoosePokemon}
>>>>>>> ccd4e1775619fa58be005cd4d24fcbf523dbe737
          options={{
            title: 'Escolha o Pokemon',
            headerStyle: {
              backgroundColor: '#0D4DA3'
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen name="Terms" component={Terms} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

