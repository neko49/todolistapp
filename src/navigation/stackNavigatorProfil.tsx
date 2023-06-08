import { ROUTE } from "../components/shared/constant/CRoute";
import ProfilPage from "../pages/profilPage/ProfilPage";
import ProfilDetail from "../pages/profilPage/ProfilDetail";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import EditProfil from "../pages/profilPage/EditProfil";
import { signup, updateProfileName } from "../services/profilAsyncStorage";
import SignupPage from "../pages/SignupPage/SignupPage";

const Stack = createStackNavigator();

export default function StackNavigatorProfil({ profileName, handleLogout }) {

  const handleSaveProfileName = async (newName) => {
    await updateProfileName(newName);
  };

  const handleSignup = async (username, password) => {
    await signup(username, password);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE.PROFIL_PAGE.DEB} options={{ headerShown: false }}>
        {(props) => (
          <ProfilPage {...props} profileName={profileName} />
        )}
      </Stack.Screen>

      <Stack.Screen name={ROUTE.PROFIL_PAGE.DETAIL}>
        {(props) => <ProfilDetail {...props} profileName={profileName} handleLogout={handleLogout} />}
      </Stack.Screen>

      <Stack.Screen name={ROUTE.PROFIL_PAGE.EDIT}>
        {(props) => (
          <EditProfil {...props} profileName={profileName} saveProfileName={handleSaveProfileName} />
        )}
      </Stack.Screen>

      <Stack.Screen name={ROUTE.SIGNUP_PAGE}>
        {(props) => (
          <SignupPage {...props} handleSignup={handleSignup} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
