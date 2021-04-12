import React from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Onboarding 3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        
        ]}
    />
  );
};

export default OnBoardingScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});