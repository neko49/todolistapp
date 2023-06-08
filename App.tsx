import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import MainTabNavigator from './src/navigation/tabNavigator';
import { styles } from './App.styles';
import { getProfileName, setProfilName } from './src/services/profilAsyncStorage';
import LoginPage from './src/pages/LoginPage/LoginPage';
import SignupPage from './src/pages/SignupPage/SignupPage';

let customFonts = {
  'Arial': require('./src/assets/fonts/arial.ttf'),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    loadFontsAsync();
    loadProfileName();
  }, []);

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
    // SplashScreen.hide(); // Cache l'écran de chargement d'Expo
  }

  async function loadProfileName() {
    const storedProfileName = await getProfileName();
    setProfileName(storedProfileName);
  }

  async function saveProfileName(name) {
    await setProfilName(name);
  }

  function handleSignup(username) {
    setShowSignup(false);
    //handleLogin(username);
  }

  function handleLogin(username) {
    setIsLoggedIn(true);
    setProfileName(username);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleSignupLinkPress() {
    setShowSignup(true);
  }

  if (!fontsLoaded) {
    return null; // Renvoie null pendant le chargement des polices pour éviter un rendu vide
  }

  if (showSignup) {
    return (
      <SafeAreaView style={styles.container}>
        <SignupPage handleSignup={handleSignup} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <MainTabNavigator 
          profileName={profileName}
          saveProfileName={saveProfileName}
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
