import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ReservationForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [section, setSection] = useState('No fumadores');

  const handleAddReservation = () => {
    if (name && date && time && people) {
      navigation.navigate('ReservationList', {
        reservation: { name, date, time, people, section }
      });
      setName('');
      setDate('');
      setTime('');
      setPeople('');
      setSection('No fumadores');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hacer una Reserva</Text>
      <Image source={require('../assets/restaurante.jpg')} style={styles.image} />
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Cantidad de personas"
        value={people}
        onChangeText={setPeople}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text>Sección</Text>
      <Picker
        selectedValue={section}
        onValueChange={(itemValue) => setSection(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="No fumadores" value="No fumadores" />
        <Picker.Item label="Fumadores" value="Fumadores" />
      </Picker>
      <Button title="Confirmar Reserva" onPress={handleAddReservation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ReservationForm;
