import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './WelcomePage.style';


export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <StatusBar style="auto" />
    </View>
  );
}

