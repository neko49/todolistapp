import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { ROUTE } from '../components/shared/constant/CRoute';
import WelcomePage from '../pages/welcomePage/WelcomePage';
import TodoPage from '../pages/todoPage/TodoPage';
import StackNavigatorProfil from './stackNavigatorProfil';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({handleLogout}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTE.WELCOME_TAB.MAIN}
        screenOptions={({ route }) => {
          return {
            tabBarStyle: {
              activeTintColor: '#e50d54',
              inactiveTintColor: 'gray',
              labelPosition: 'below-icon',
              showLabel: true,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";

              if (route.name === ROUTE.WELCOME_TAB.MAIN) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === ROUTE.PROFIL_PAGE.MAIN) {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === ROUTE.TODO_TAB.MAIN) {
                iconName = focused ? "create" : "create-outline";
              }

              return <Ionicons name={iconName as any} size={size} color={color} />;
            },
          };
        }}
      >
        <Tab.Screen name={ROUTE.WELCOME_TAB.MAIN} component={WelcomePage} />
        <Tab.Screen name={ROUTE.TODO_TAB.MAIN} component={TodoPage} />
        <Tab.Screen name={ROUTE.PROFIL_PAGE.MAIN}>
          {() => (
            <StackNavigatorProfil
              handleLogout={handleLogout}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}