import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './ProfilPage.style';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../components/shared/constant/CRoute';
import { getProfileName } from '../../services/profilAsyncStorage';

export default function ProfilPage() {
  const navigation = useNavigation();
  const [profileName, setProfileName] = React.useState('');

  React.useEffect(() => {
    async function fetchProfileName() {
      const name = await getProfileName();
      setProfileName(name);
    }

    fetchProfileName();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{profileName}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(ROUTE.PROFIL_PAGE.DETAIL)}
      >
        <Text>Plus d'informations</Text>
      </TouchableOpacity>
    </View>
  );
}
