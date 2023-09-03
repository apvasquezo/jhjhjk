import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Datepicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import { StyleSheet, Text, View, TextInput, Image,
  Pressable, TouchableOpacity, Modal, ScrollView, Icon,
} from 'react-native';

const NewsEvent = () => {
  const today= new Date();
  const starToday=getFormatedDate(today.setDate(today.getDate()+1), 'YYYY/MM/DD')
  const [mood, setMood] = useState('');
  const [fechaI, setFechaI] = useState( new Date());  
  const [fechaF, setFechaF] = useState( new Date());
  const [open, SetOpen] = useState(false);
  const [openF, SetOpenF] = useState(false);
  const navigation=useNavigation();

  const saveNews = () => {
    console.log('Graba Novedad');
    navigation.navigate('Home');
  };

  function handleOpen(){
    SetOpen(!open);
  }

  function handleOpenF(){
    SetOpenF(!openF);
  }
  function handleChangeI(propDate){
    setFechaI(propDate)
  }
  function handleChangeF(propDate){
    setFechaF(propDate)
  }

  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image
          style={styles.logo}
          source={require('../images/mina.jpg')}
        />

        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Tipo de Novedad</Text>
          <View style={styles.wrapper}>
            {[ 'Licencia', 'Incapacidad', 'Vacaciones'].map(feeling => (
              <View key={feeling} style={styles.mood}>
                <Text style={styles.feeling}>{ feeling}</Text>
                <TouchableOpacity 
                  style={styles.outter}
                  onPress={()=> setMood(feeling)}> 
                  {mood=== feeling && <View style={styles.inner} /> }
                </TouchableOpacity>
              </View>
            ))} 
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleOpen}>
            <Text style={styles.label}>Fecha Inicial</Text> 
          </TouchableOpacity>    
          <Modal
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
        </View>
        <View>
          <TouchableOpacity onPress={handleOpenF}>
              <Text style={styles.label}>Fecha Final</Text>
          </TouchableOpacity>
          <Modal
            animationType='slide'
            transparent={true}
            visible={openF}>
            <Datepicker 
              locale='es'
              mode='calendar'
              minimunDate={starToday}
              selected={Date}
              onDateChange={handleChangeF}         
            />
            <TouchableOpacity onPress={handleOpenF}>
              <Text style={styles.btn_fecha}>Cerrar</Text>
            </TouchableOpacity>
          </Modal>
          <TextInput 
            style={styles.input}
            value={fechaF} 
            setValue={setFechaF}
            disabled />          
        </View>
        <View>
          <Pressable style={styles.btn_cita} onPress={saveNews}>
            <Text style={styles.btn_txtcita}>Guardar Novedad</Text>
          </Pressable>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  feeling:{
    fontSize: 20,
    textTransform: 'capitalize',
  },
  mood:{
    marginHorizontal: 15,
    alignItems: 'center',
  },

  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
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
  checkboxContainer: {
    width: '80%',
    height: 100,
    font: 'Calendas Plus',
    fontSize: 30,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inner:{
    width: 12,
    height: 12,
    backgroundColor: 'gray',
    borderRadius: 10,
  },

  outter: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
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
});

export default NewsEvent;
