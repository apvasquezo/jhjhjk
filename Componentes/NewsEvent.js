import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'react-native-check-box'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Icon
} from 'react-native';

const NewsEvent = () => {
  const [check4, setCheck4] = useState(false);
  const [selectedIndex, setIndex] = React.useState(0);
  const [check2, setCheck2] = useState(false);
  const [fechaF, setFechaF] = useState('');
  const [fechaI, setFechaI] = useState('');
  const navigation=useNavigation();
  
  const NovedadL = () => {
    setLicencia(true);
    setVaca(false);
  };

  const NovedadV = () => {
    setVaca(true);
    setLicencia(false);
  };
  const saveNews = () => {
    console.log('Graba Novedad');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <Image
        style={styles.logo}
        source={require('../images/mina.jpg')}
      />
      <Text style={styles.label}>Tipo de Novedad</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          leftText="Licencia"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={check2}
          onClick={() => setCheck2(!check2)}
        />
        <CheckBox
          leftText="Vacaciones"
          checkedIcon={
            <Icon
              name="radio-button-checked"
              type="material"
              color="green"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-unchecked"
              type="material"
              color="grey"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          checked={check4}
          onPress={() => setCheck4(!check4)}
        />         
      </View>
      
      <Text style={styles.label}>Fecha Inicial</Text>
      <TextInput
        placeholder="01/01/2023"
        value={fechaI}
        onChangeText={setFechaI}
        style={styles.input}
      />
      <Text style={styles.label}>Fecha Final</Text>
      <TextInput
        placeholder="01/01/2023"
        value={fechaF}
        onChangeText={setFechaF}
        style={styles.input}
      />

      <Pressable style={styles.btn_cita} onPress={saveNews}>
        <Text style={styles.btn_txtcita}>Guardar Novedad</Text>
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
  checkboxContainer: {
    width: '40%',
    height: 60,
    font: 'Calendas Plus',
    fontSize: 30,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default NewsEvent;
