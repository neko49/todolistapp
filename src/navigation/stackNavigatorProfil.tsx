import { ROUTE } from "../components/shared/constant/CRoute";
import ProfilPage from "../pages/profilPage/ProfilPage";
import ProfilDetail from "../pages/profilPage/ProfilDetail";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import EditProfil from "../pages/profilPage/EditProfil";

const Stack = createStackNavigator();

export default function StackNavigatorProfil({ handleLogout }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE.PROFIL_PAGE.DEB} options={{ headerShown: false }}>
        {(props) => (
          <ProfilPage  />
        )}
      </Stack.Screen>

      <Stack.Screen name={ROUTE.PROFIL_PAGE.DETAIL}>
        {(props) => <ProfilDetail  handleLogout={handleLogout} />}
      </Stack.Screen>

      <Stack.Screen name={ROUTE.PROFIL_PAGE.EDIT}>
        {(props) => (
          <EditProfil  />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}
