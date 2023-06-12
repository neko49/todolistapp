import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getProfileName, updateProfileName } from '../../services/profilAsyncStorage';

export default function EditProfil() {
  const [newProfileName, setNewProfileName] = useState('');
  const [profileName, setProfileName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfileName = async () => {
      const name = await getProfileName();
      setProfileName(name);
    };

    fetchProfileName();
  }, []);

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
      <Text>{profileName}</Text>
      <Button title="Save" onPress={handleSaveProfile} />
    </View>
  );
}
