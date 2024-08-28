import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="ReservationForm" component={ReservationForm} options={{ title: 'Nueva Reserva' }} />
        <Stack.Screen name="ReservationList" component={ReservationList} options={{ title: 'Lista de Reservas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
