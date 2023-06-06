import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { ROUTE } from '../../components/shared/constant/CRoute';
import { useNavigation } from '@react-navigation/native';

export default function ProfilDetail({ profileName, handleLogout }) {
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({ title: profileName });
  }, [profileName]);

  return (
    <View>
      <Text>Welcome to your profile, {profileName}!</Text>
      <Button title="Edit Profile" onPress={() => navigate.navigate(ROUTE.PROFIL_PAGE.EDIT)} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
