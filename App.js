
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';


const App = ()  => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
          <AppStack.Screen name="Onboarding" component={OnBoardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
