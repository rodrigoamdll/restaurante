import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/restaurante.jpg')} style={styles.image} />
      <Text style={styles.title}>Bienvenido al Restaurante</Text>
      <Button
        title="Hacer una Reserva"
        onPress={() => navigation.navigate('ReservationForm')}
      />
      <Button
        title="Ver Reservas"
        onPress={() => navigation.navigate('ReservationList')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
