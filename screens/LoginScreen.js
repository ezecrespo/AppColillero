import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native'
import { useLayoutEffect, useState } from 'react';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const LoginScreen = () => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario logueado!')
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Home');
            })
            .catch(error => {
                console.log(error);
                Alert.alert(error.message);
            })
    }

    function emailInputHandler(text) {
        setEmail(text);
    }
    function passwordInputHandler(text) {
        setPassword(text);
    }
    function goToRegisterScreen() {
        navigation.navigate('Register');
      }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <View style={styles.box}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Ionicons name="person-outline" size={28} color="black" style={{marginEnd:10, paddingTop:5}} />
                    <TextInput style={styles.textInput} placeholder='Correo electronico' onChangeText={emailInputHandler}/>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Ionicons name="lock-closed-outline" size={28} color="black" style={{marginEnd:10, paddingTop:5} } />
                    <TextInput style={styles.textInput} placeholder='Contraseña' onChangeText={passwordInputHandler} />
                </View>
            </View>

            <View style={styles.viewButton}>
                <Pressable style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.textButton}>ENTRAR</Text>
                </Pressable>
            </View>
            
            <View>
                <Text style={{fontSize:12, marginStart:10}}>
                        <Text >¿Aún no tenes cuenta?</Text>
                        <Text style={{color:'purple'}} onPress={goToRegisterScreen}> Regístrate</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
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
      width: 240,
      paddingLeft: 10,
      height: 40,
        marginBottom: 10,
    },
    viewButton: {
        marginTop:10,
        marginBottom: 10,
    },
    button: {
        width: 240,
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
      box: {
        marginLeft: -40,
      },
      viewRegisterButton:{
        marginBottom: 10,
      },
      registerButton:{
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor: '#cccccc',
      }
  });
  
export default LoginScreen