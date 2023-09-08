import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Icon,
  Alert,
} from 'react-native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation();

  const register=()=>{
    console.log('to register');
    navigation.navigate('Checkin');
  }
  const handleLogin = () => {
    // autenticación
    if (username === 'admin' && password === 'clave') {
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } else {
      setUsername('');
      setPassword('');
      Alert.alert('Error', 'Credenciales incorrectas');
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.Container}>
      <Image
        style={styles.logo}
      source={require('../images/mina.jpg')}
      />
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        image='user'
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Pressable 
        style={styles.btn_cita}
        onPress={handleLogin}>
        <Text style={styles.btn_txtcita}>Iniciar Sesion</Text>
      </Pressable>
      <Pressable 
        style={styles.btn_cita}
        onPress={register}>
        <Text style={styles.btn_txtcita}>Registrar</Text>
      </Pressable>     
    </View>

    );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f3f4f6'
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal:35,
    paddingHorizontal: 10,
    borderRadius:5,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
 
  btn_cita:{
    width: '90%',
    height: 40,
    textAlign: 'center',
    backgroundColor:'#841584',
    borderRadius:10,
    paddingHorizontal: 10,
    marginVertical:10,
    marginHorizontal:20,
  },

  btn_txtcita:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5,
  },  
});

export default LoginScreen;
