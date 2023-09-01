import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

const Home = () => {
  const navigation=useNavigation();

  const entryTimeN = () => {
    console.log('Hora de entrada');
    navigation.navigate('EntryTime');
  };
  const exitTimeN = () => {
    console.log('Hora de salida');
    navigation.navigate('ExitTime');
  };
  const consulTime = () => {
    console.log('Consulta de horas');
    navigation.navigate('Consult');
  };
  const news = () => {
    console.log('Novedades');
    navigation.navigate('NewsEvent');
  };

  return (
    <View style={styles.Container}>
      <Image 
        style={styles.logo} 
        source={require('../images/mina.jpg')} 
      />
      <Pressable 
        style={styles.btn_cita} 
        onPress={entryTimeN}>
        <Text style={styles.btn_txtcita}>Hora Ingreso</Text>
      </Pressable>
      <Pressable 
        style={styles.btn_cita} 
        onPress={exitTimeN}>
        <Text style={styles.btn_txtcita}>Hora Salida</Text>
      </Pressable>
      <Pressable 
        style={styles.btn_cita} 
        onPress={consulTime}>
        <Text style={styles.btn_txtcita}>Consultar Horas</Text>
      </Pressable>
      <Pressable 
        style={styles.btn_cita} 
        onPress={news}>
        <Text style={styles.btn_txtcita}>Novedades</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Title: {
    font: 'coption',
    fontSize: 25,
    color: '#E00017',
    textAlign: 'center',
    borderRadius: 10,
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
});

export default Home;
