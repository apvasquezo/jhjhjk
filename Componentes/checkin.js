import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';

const Checkin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [regular,setRegular]=useState('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$')
  const navigation = useNavigation();

  const toregistet = () => {
    console.log('to register');
    navigation.navigate('LoginScreen');
    if (setRegular.email){
        navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require('../images/mina.jpg')} />
      <View>
        <Text style={styles.label}>Nombre Completo</Text>
        <TextInput
          placeholder="Nombre"
          value={name}
          onChangeText={setname}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          placeholder="E-mail"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
      <Text style={styles.label}>Contraseña de 8 caracteres</Text>
      <View>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Pressable style={styles.btn_cita} onPress={toregistet}>
        <Text style={styles.btn_txtcita}>Registrar</Text>
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

export default Checkin;
