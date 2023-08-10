import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useRoute } from './router';

const loadApplication = async () =>
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff',
        },
      }}
    >
      {useRoute(true)}
    </NavigationContainer>
  );
}
