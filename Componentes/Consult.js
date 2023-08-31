import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Datepicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const Consult = () => {
  const today=new Date();
  const starToday=getFormatedDate(today.setDate(today.getDate()+1), 'YYYY/MM/DD')
  const [fechaI, setFechaI] = useState( new Date());  
  const [fechaF, setFechaF] = useState( new Date());
  const [open, SetOpen] = useState(false)
  const navigation = useNavigation();

  const consult=()=>{
    console.log('Listando');

  }
  const exit=() =>{
    console.log('Salir de las consultas')
    navigation.navigate('Home')
  }
 
  function handleOpen(){
    SetOpen(!open);
  }

  function handleChangeI(propDate){
    setFechaI(propDate);
  }

  function handleChangeF(propDate){
    setFechaF(propDate);
  }

  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image
          style={styles.logo}
          source={require('../images/mina.jpg')}
        />      
        <TouchableOpacity onPress={handleOpen}>
          <Text style={styles.label}>Fecha Inicial</Text> 
        </TouchableOpacity>    
        <Modal
          style={styles.modal}
          animationType='slide'
          transparent={true}
          visible={open}>
          <Datepicker 
            locale='es'
            mode='calendar'
            minimunDate={starToday}
            selected={Date}
            onDateChange={handleChangeI}         
          />
          <TouchableOpacity onPress={handleOpen}>
            <Text style={styles.btn_fecha}>Cerrar</Text>
          </TouchableOpacity>
        </Modal>

        <TextInput 
          style={styles.input}
          value={fechaI} 
          setValue={setFechaI} 
          disabled />        
        <TouchableOpacity onPress={handleOpen}>
          <Text style={styles.label}>Fecha Final</Text>
        </TouchableOpacity>
        <Modal
          style={styles.modal}
          animationType='slide'
          transparent={true}
          visible={open}>
          <Datepicker 
            locale='es'
            mode='calendar'
            minimunDate={starToday}
            selected={Date}
            onDateChange={handleChangeF}         
          />
          <TouchableOpacity onPress={handleOpen}>
            <Text style={styles.btn_fecha}>Cerrar</Text>
          </TouchableOpacity>
        </Modal>
        <TextInput 
          style={styles.input}
          value={fechaF} 
          setValue={setFechaF} 
          disabled />    
        <View>
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
      </View>
    </ScrollView>
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
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white',
    paddingHorizontal: 10,
    paddingVertical:10,
    marginVertical:10,
    marginHorizontal:150,   
    backgroundColor:'#04a6fc',
    borderRadius:20, 
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
  modal:{
    height:200,
  }
});

export default Consult;
