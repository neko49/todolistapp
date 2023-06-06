import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './SignupPage.Style';
import { signup, setProfilName } from '../../services/profilAsyncStorage';

export default function SignupPage({ handleSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupPress = async () => {
    // Effectuer des validations d'inscription ici
    if (username !== '' && password !== '') {
      try {
        await signup(username, password); // Enregistrer le nom d'utilisateur et le mot de passe

        await setProfilName(username); // Mettre à jour le nom d'utilisateur dans AsyncStorage

        // Appeler la fonction d'inscription parente avec le nom d'utilisateur
        handleSignup(username);
      } catch (error) {
        console.log('Error saving username and password to AsyncStorage:', error);
      }
    } else {
      // Afficher une erreur d'inscription invalide
      alert('Please enter a username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page</Text>
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
        onPress={handleSignupPress}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
