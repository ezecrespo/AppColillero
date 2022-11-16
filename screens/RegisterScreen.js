import { StyleSheet, Pressable, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const RegisterScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');


  const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log('Usuario creado!')
            const user = userCredential.user;
            console.log(user);
            navigation.navigate('Login');
          })
          .catch(error => {
              console.log(error);
              Alert.alert(error.message);
          })
  }


  function nombreInputHandler(text) {
    setNombre(text);
  }
  function apellidoInputHandler(text) {
    setApellido(text);
  }
  function emailInputHandler(text) {
    setEmail(text);
  }
  function passwordInputHandler(text) {
    setPassword(text);
  }
  function goToLoginScreen() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity >
        <Text style={{ fontSize: 12, color: 'purple', marginBottom: 40 }} onPress={goToLoginScreen}>Volver al login</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Nuevo Usuario</Text>
      <View>
        <TextInput style={styles.textInput} placeholder='Nombre' onChangeText={nombreInputHandler} />
        <TextInput style={styles.textInput} placeholder='Apellido' onChangeText={apellidoInputHandler}/>
        <TextInput style={styles.textInput} placeholder='Correo electronico' onChangeText={emailInputHandler}/>
        <TextInput style={styles.textInput} placeholder='Contraseña' onChangeText={passwordInputHandler}/>
      </View>
      <View style={styles.viewButton}>
                <Pressable style={styles.button} onPress={handleCreateAccount}>
                    <Text style={styles.textButton}>CREAR</Text>
                </Pressable>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: 200,
    paddingLeft: 10,
    height: 40,
    marginBottom:10,
  },
  viewButton: {
    marginTop:20,
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});

export default RegisterScreen