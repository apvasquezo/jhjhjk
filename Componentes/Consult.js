import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {

  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';


const Consult = () => {
  const [fechaI, setFechaI] = useState('');
  const [fechaF, setFechaF] = useState('');
  const navigation = useNavigation();

  const consult=()=>{
    console.log('Listar');
    navigation.navigate('Home');
  }
 
  return (
    <View style={styles.Container}>
      <Image
        style={styles.logo}
      source={require('../images/mina.jpg')}
      />
      <Text style={styles.label}>Fecha Inicial</Text>
      <TextInput
        placeholder="01/01/2023"
        value={fechaI}
        onChangeText={setFechaI}
        style={styles.input}
      />
      <Text style={styles.label}>HFecha Final</Text>
      <TextInput
        placeholder="01/01/2023"
        value={fechaF}
        onChangeText={setFechaF}
        style={styles.input}
      />
    
      <Pressable 
        style={styles.btn_cita}
        onPress={consult}>
        <Text style={styles.btn_txtcita}>Consultar</Text>
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
  label:{
    font:'Calendas Plus',
    fontSize: 15,
    color: '#000000',
    marginBottom:5,
    marginTop:15,
    fontWeight:'600', 
  }
});

export default Consult;
