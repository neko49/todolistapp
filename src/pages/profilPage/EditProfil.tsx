import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { updateProfileName } from '../../services/profilAsyncStorage';

export default function EditProfil({ profileName }) {
  const [newProfileName, setNewProfileName] = useState(profileName); // Utiliser profileName comme valeur initiale
  const navigation = useNavigation();

  const handleSaveProfile = async () => {
    if (newProfileName.trim() !== '') {
      await updateProfileName(newProfileName);
      navigation.goBack();
    }
  };

  return (
    <View>
      <Text>Edit Profile</Text>
      <TextInput
        placeholder="Enter your new profile name"
        value={newProfileName}
        onChangeText={setNewProfileName}
      />
      <Button title="Save" onPress={handleSaveProfile} />
    </View>
  );
}
