import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import MainTabNavigator from './src/navigation/tabNavigator';
import { styles } from './App.styles';
import { getProfileName } from './src/services/profilAsyncStorage';
import LoginPage from './src/pages/LoginPage/LoginPage';
import SignupPage from './src/pages/SignupPage/SignupPage';

let customFonts = {
  'Arial': require('./src/assets/fonts/arial.ttf'),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    loadFontsAsync();
    loadProfileName();
  }, []);

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  async function loadProfileName() {
    const storedUsername = await getProfileName();
    setUsername(storedUsername);
  }

  function handleSignup() {
    setShowSignup(false);
    //handleLogin(username); //se loguer directement après avoir signup
  }

  function handleLogin(username) {
    setIsLoggedIn(true);
    setUsername(username);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleSignupLinkPress() {
    setShowSignup(true);
  }

  function handleBack() {
    setShowSignup(false);
  }

  if (!fontsLoaded) {
    return null; // Renvoie null pendant le chargement des polices pour éviter un rendu vide
  }

  if (showSignup) {
    return (
      <SafeAreaView style={styles.container}>
        <SignupPage handleSignup={handleSignup} handleBack={handleBack} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <MainTabNavigator 
          handleLogout={handleLogout}  
        />
      ) : (
        <>
          <LoginPage handleLogin={handleLogin} />
          <TouchableOpacity onPress={handleSignupLinkPress}>
            <Text>Don't have an account? Sign up here</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
