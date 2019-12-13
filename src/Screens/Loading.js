import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator,ImageBackground} from 'react-native';
import back from '../Assets/Images/back.jpg'
import {Database, Auth} from '../Configs/Firechat';
import styles from './styles/styles'




class Loading extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Auth.onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'App' : 'Auth');
      });
    }, 2500);
  }

  render() {
    return (
      <ImageBackground source={back} style={styles.backgroundContainer}>
        <View style={styles.container}>
        <Text style={{fontSize:25,color:'green',fontWeight:'bold',textAlign:'center'}}>
          Let's Go Talk .....
        </Text>
          
          <ActivityIndicator size="large" color="green" />
   
        </View>
        </ImageBackground>

    
    );
  }
}

export default Loading;
