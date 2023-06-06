import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './LoginPage.Style';
import { updateProfileName } from '../../services/profilAsyncStorage';

export default function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    // Effectuer des validations de connexion ici
    if (username === 'admin' && password === 'password') {
      // Mettre à jour le nom dans AsyncStorage
      await updateProfileName(username);
      
      // Appeler la fonction de connexion parente avec le nom d'utilisateur
      handleLogin();
    } else {
      // Afficher une erreur de connexion invalide
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
