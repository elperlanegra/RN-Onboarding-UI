import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import { AsyncStorage } from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)
  
  
  useEffect(() => {
    
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if(isFirstLaunch == null){
    return null;
  }else if(isFirstLaunch == true) {

    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnBoardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    ); 
   } else {
    return <LoginScreen />
   }


};

export default App;
