/**
 * @format
 */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {name as appName} from './app.json';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>¡Hola, Mundo Móvil!</Text>
    <Text style={styles.subtext}>
      Este es el punto de partida para la app nativa de NAUTIXA.
    </Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E293B',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subtext: {
        fontSize: 18,
        color: '#94A3B8',
        textAlign: 'center',
        marginTop: 10,
    }
})

AppRegistry.registerComponent(appName, () => App);
