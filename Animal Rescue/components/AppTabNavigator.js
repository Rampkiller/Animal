import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AdoptAnimalScreen from '../screens/AdoptAnimalScreen';
import Emergency from '../screens/Emergency';




export const AppTabNavigator = createBottomTabNavigator({
  AdoptAnimal : {
    screen: AdoptAnimalScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/adopt.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Adopt An Animal",
    }
  },
  
  Emergency: {
    screen: Emergency,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/call.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Call Now",
    }
  }
});