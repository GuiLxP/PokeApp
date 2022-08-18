import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import Login from './src/pages/Login/Login'
import Home from './src/pages/Home/Home'
import NewPlayer from './src/pages/NewPlayer/NewPlayer'
import ChoisePokemon from './src/pages/ChoisePokemon/ChoisePokemon'
import Terms from './src/pages/Terms/Terms'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={Home} />
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
          name="ChoisePokemon"
          component={ChoisePokemon}
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


