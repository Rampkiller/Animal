import React from 'react';
import LottieView from 'lottie-react-native';

export default class AnimalRescue extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/ambulence.json')}
            style={{width:'65%',alignSelf:'center'}}
            autoPlay loop/>

        )
    }
}