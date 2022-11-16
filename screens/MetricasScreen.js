import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

function MetricasScreen() {
    const [metricas, setMetricas] = React.useState([]);
    
    useEffect(() => {
        const getMetricasFromApi = async () => {
          let response = await fetch(
            'https://6370cd8408218c267e06418d.mockapi.io/metricas/metricas'
          );
          let json = await response.json();
          console.log(json);
          setMetricas(json[0]);
        }
        getMetricasFromApi();
        console.log('asdd')
      },[]);

    const component = (metrica) =>(<>
        <Title>Contador diario de colillas: </Title>
        <Paragraph style={styles.parrafo}>{metrica}</Paragraph>
    </>)

  return (
    <>
    <Card style={styles.card}>
      <Card.Content>
        {metricas.metrica1==null ? <ActivityIndicator style={styles.loader} size="large" color="grey" /> : component(metricas.metrica1)}
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        {metricas.metrica2==null ? <ActivityIndicator style={styles.loader} size="large" color="grey" /> : component(metricas.metrica2)}
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        {metricas.metrica3==null ? <ActivityIndicator style={styles.loader} size="large" color="grey" /> : component(metricas.metrica3)}
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        {metricas.metrica4==null ? <ActivityIndicator style={styles.loader} size="large" color="grey" /> : component(metricas.metrica4)}
      </Card.Content>
    </Card>
    </>
  )
}
const styles = StyleSheet.create({
    parrafo: {
      fontSize: 20,
      marginTop: 20
    },
    card: {
      width: 280,
      height: 120,
      borderRadius: 5,
      marginTop: 20,
      paddingVertical: 5,
      backgroundColor: 'white',
    },
    loader: {
      padding: 20,
    },
});

export default MetricasScreen