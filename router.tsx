import React from 'react';
import { RegistrationScreen } from './screens/authScreens/RegistrationScreen';
import { LoginScreen } from './screens/authScreens/LoginScreen';
import Home from './screens/Home';

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export const useRoute = (isAuth: boolean) => {
  return (
    <MainStack.Navigator initialRouteName={isAuth ? 'Home' : 'Login'}>
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
