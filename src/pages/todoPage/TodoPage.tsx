import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './TodoPage.Style'; // Importez les styles à partir du fichier styles.ts


export default function ProfilPage() {
  return (
    <View style={styles.container}>
      <Text>Page Todo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

