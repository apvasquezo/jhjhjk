import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';


const Consult = () => {
  const [fechaI, setFechaI] = useState( new Date());  
  const [fechaF, setFechaF] = useState( new Date());
  const [open,setOpen] = useState(false)
  const navigation = useNavigation();

  const consult=()=>{
    console.log('Listando');

  }
  const exit=() =>{
    console.log('Salir de las consultas')
    navigation.navigate('Home')
  }
 
  return (
    <View style={styles.Container}>
      <Image
        style={styles.logo}
      source={require('../images/mina.jpg')}
      />
      <View>
        <Text style={styles.label}>Fecha Inicial</Text>
        <TextInput
          placeholder="01/01/2023"
          value={fechaI}
          onChangeText={setFechaF}
          style={styles.input}
        />
        <Pressable 
          style={styles.btn_fecha}
          onPress={() => setOpen(true)}>

          <Text style={styles.btn_txtcita}>Open</Text>        
        </Pressable>
        <DatePicker
            modal
            open={open}
            date={fechaI}

            onConfirm={(date) => {
              setOpen(false)
              setFechaI(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}></DatePicker>
      </View>
      <View>
        <Text style={styles.label}>Fecha Final</Text>
        <TextInput
          placeholder="01/01/2023"
          value={fechaF}
          onChangeText={setFechaF}
          style={styles.input}
        />
        <Pressable 
          style={styles.btn_fecha}
          onPress={() => setOpen(true) }>
          <Text style={styles.btn_txtcita}>Open</Text>        
        </Pressable>
        <DatePicker
            modal
            open={open}
            date={fechaF}
            onConfirm={(fechaf) => {
              setOpen(false)
              setFechaI(fechaf)
            }}
            onCancel={() => {
              setOpen(false)
            }}></DatePicker>        
      </View>
      <Pressable 
        style={styles.btn_cita}
        onPress={consult}>
        <Text style={styles.btn_txtcita}>Consultar</Text>
      </Pressable>  
      <Pressable 
        style={styles.btn_cita}
        onPress={exit}>
        <Text style={styles.btn_txtcita}>Salir</Text>
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
    width: '60%',
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
  btn_fecha:{
    width: '20%',
    height: 40,
    paddingHorizontal: 10,
    marginVertical:10,
    marginHorizontal:300,   
    backgroundColor:'#04a6fc', 
  },

  btn_txtcita:{
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

export default Consult;
