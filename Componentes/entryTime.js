import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  getDateTime,
} from 'react-native';

const EntryTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [entry, setEntry] = useState('');
  const navigation=useNavigation();

  const save = () => {
    console.log('to register');
    navigation.navigate('Home');
  };

  useEffect(() => {
    setDate(new Date);
    setTime(new Date);
  }, []);
  
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const formateoFecha = fecha =>{
    const nuevaFecha = new Date(fecha)
      const opciones = {
          weekday: 'long',
          year:'numeric',
          month:'long',
          day:'numeric'
      }
      return nuevaFecha.toLocaleDateString('es-ES', opciones)
  };

  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require('../images/mina.jpg')} />
      <View>
        <Text style={styles.label}>Fecha de Ingreso</Text>
        <TextInput 
          style={styles.input}
          value={formateoFecha(date)} 
          setValue={setDate}
          disabled />
      </View>
      <View>
        <Text style={styles.label}>Hora de Ingreso</Text>
        <TextInput
          style={styles.input}
          value={formatTime(time)} 
          setValue={setTime} disabled/>
      </View>
      <View>
        <Text style={styles.label}>Jornada Laboral</Text>
        <TextInput
          placeholder="AM o PM"
          value={entry}
          onChangeText={setEntry}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.btn_cita} onPress={save}>
        <Text style={styles.btn_txtcita}>Grabar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 35,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  btn_cita: {
    width: '90%',
    height: 40,
    textAlign: 'center',
    backgroundColor: '#841584',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  btn_txtcita: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5,
  },

  label: {
    font: 'Calendas Plus',
    fontSize: 15,
    color: '#000000',
    marginBottom: 5,
    marginTop: 15,
    fontWeight: '600',
    marginHorizontal: 20,
  },
});

export default EntryTime;
