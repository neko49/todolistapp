import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../components/shared/constant/CRoute';
import { getProfileName } from '../../services/profilAsyncStorage';

export default function ProfilDetail({ handleLogout }) {
  const navigate = useNavigation();
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    const fetchProfileName = async () => {
      const name = await getProfileName();
      setProfileName(name);
    };

    fetchProfileName();
  }, []);

  useEffect(() => {
    navigate.setOptions({ title: profileName });
  }, [navigate, profileName]);

  return (
    <View>
      <Text>Welcome to your profile, {profileName}!</Text>
      <Button title="Edit Profile" onPress={() => navigate.navigate(ROUTE.PROFIL_PAGE.EDIT)} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
