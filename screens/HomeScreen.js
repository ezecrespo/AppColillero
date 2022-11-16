import React from 'react'
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import MetricasScreen from './MetricasScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';


function HomeScreen() {
    const [metricasScreen, setMetricasScreen] = React.useState(false);
    const [boton, setBoton] = React.useState(true);
    const navigation = useNavigation();

    const encender = () =>{
        console.log('asd')
      const getArticlesFromApi = async () => {
        let response = await fetch(
          'https://11f56088-dee5-4808-a85d-c3da55840771.mock.pstmn.io/cursos'
        );
        let json = await response.json();
        console.log(json);
        boton ? setBoton(false) : setBoton(true);
      }
      getArticlesFromApi();
      
      /* const EVENT_TYPES = [
        'STORAGE_WAS_TURN_ON',
        'STORAGE_WAS_TURN_OFF',
        'STORAGE_WAS_EMPTIED',
        'STORAGE_WAS_FILLED',
        'NEW_CIGARETTE_BUTT_STORED',
      ];
      const rawResponse = await fetch('https://6690-170-51-88-40.sa.ngrok.io/api/v1/events', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            storageId: 1,
            type: EVENT_TYPES[3],
          })
        });
        const content = await rawResponse.json(); */
      
      
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    })

  return (
    <View style={styles.container}>
        
    {!metricasScreen &&     <Button style={boton ? styles.button2Green : styles.button2Red} mode="outlined" onPress={encender}>
        <Icon name="power-off" size={20} color="white" />
    </Button>}
    
    <Button style={styles.button1} mode="outlined" onPress={()=>{metricasScreen ? setMetricasScreen(false) : setMetricasScreen(true)}}>
      <Text style={styles.text}>{metricasScreen ? "Volver Atras" : "Mostrar metricas"}</Text>
    </Button>

    {metricasScreen && <MetricasScreen />}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button1: {
      width: 280,
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 5,
      backgroundColor: '#323232',
      color: 'red',
    },
    button2Red: {
      width: 280,
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 5,
      borderColor: 'black',
      marginBottom: 10,
      backgroundColor: '#bf5252',
    },
    button2Green: {
      width: 280,
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 5,
      marginBottom: 10,
      backgroundColor: '#58c356',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  
export default HomeScreen