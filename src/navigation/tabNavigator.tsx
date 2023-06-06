import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ROUTE } from '../components/shared/constant/CRoute';
import WelcomePage from '../pages/welcomePage/WelcomePage';
import TodoPage from '../pages/todoPage/TodoPage';
import StackNavigatorProfil from './stackNavigatorProfil';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({ profileName, saveProfileName, handleLogout }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTE.WELCOME_TAB.MAIN}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            activeTintColor: '#e50d54',
            inactiveTintColor: 'gray',
            labelPosition: 'below-icon',
            showLabel: true
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (Platform.OS === "android") {
              iconName += "md-";
            } else if (Platform.OS === "ios") {
              iconName += "ios-";
            }

            if (focused) {
              size = size + 4;
            }

            switch (route.name) {
              case ROUTE.WELCOME_TAB.MAIN: {
                iconName += "home";
                break;
              }
              case ROUTE.PROFIL_PAGE.MAIN: {
                iconName += "person";
                break;
              }
              case ROUTE.TODO_TAB.MAIN: {
                iconName += "create";
                break;
              }
              default: {
                break;
              }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name={ROUTE.WELCOME_TAB.MAIN} component={WelcomePage} />
        <Tab.Screen name={ROUTE.TODO_TAB.MAIN} component={TodoPage} />
        <Tab.Screen name={ROUTE.PROFIL_PAGE.MAIN}>
          {() => <StackNavigatorProfil profileName={profileName} saveProfileName={saveProfileName} handleLogout={handleLogout} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
