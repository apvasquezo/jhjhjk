import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';



const entryTime = ({navigation}) => {
  const [date, setDate] = useState(new(date));
  const [mode, setmode] = useState('date');
  const[show, setshow] = useState(false);
  const [entry, setEntry] = useState('');
  const [hourT, sethourT]=useState('');

  const save=()=>{
    console.log('to register');
    navigation.navigate('Home');
  }
 
  return (
    <View style={styles.Container}>
      <Image
        style={styles.logo}
      source={require('../images/mina.jpg')}
      />
      <Text style={styles.label}>Fecha de Ingreso</Text>
      <DateTimePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Selecciona la Fecha"
          format="DD-MM-YYYY"
          minDate="01-01-2022"
          maxDate="01-01-2024"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />     
      
      <Text style={styles.label}>Hora de Ingreso</Text>
      <TextInput
        placeholder="Hora de Ingreso"
        value={hourT}
        onChangeText={sethourT}
        style={styles.input}
      />
      <Text style={styles.label}>Jornada Laboral</Text>
      <TextInput
        placeholder="AM o PM"
        value={entry}
        onChangeText={setEntry}
        style={styles.input}
      />      
      <Pressable 
        style={styles.btn_cita}
        onPress={save}>
        <Text style={styles.btn_txtcita}>Grabar</Text>
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
    marginHorizontal:20,    
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default entryTime;
