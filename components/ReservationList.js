import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const ReservationList = ({ route, navigation }) => {
  const reservation = route?.params?.reservation || null;
  const [reservations, setReservations] = React.useState([]);

  React.useEffect(() => {
    if (reservation) {
      setReservations(prevReservations => [...prevReservations, reservation]);
    }
  }, [reservation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nombre: {item.name}</Text>
            <Text>Fecha: {item.date}</Text>
            <Text>Hora: {item.time}</Text>
            <Text>Personas: {item.people}</Text>
            <Text>Sección: {item.section}</Text>
          </View>
        )}
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ReservationList;
