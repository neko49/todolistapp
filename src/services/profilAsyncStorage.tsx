import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProfileName = async () => {
  try {
    const username = await AsyncStorage.getItem('username');
    return username ? username : 'Bastien M.'; // Retourne 'Bastien M.' si le nom d'utilisateur n'est pas stocké
  } catch (error) {
    console.log('Error retrieving profile name from AsyncStorage:', error);
    return ''; // En cas d'erreur, retourne une chaîne vide
  }
};


export const setProfilName = async (username) => {
  try {
    await AsyncStorage.setItem('username', username);
  } catch (error) {
    console.log('Error saving profile name to AsyncStorage:', error);
  }
};


export const updateProfileName = async (newName) => {
  try {
    await setProfilName(newName);
  } catch (error) {
    console.log('Error updating profile name in AsyncStorage:', error);
  }
};

export const signup = async (username, password) => {
  try {
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);
  } catch (error) {
    console.log('Error saving username and password to AsyncStorage:', error);
    throw error;
  }
};

