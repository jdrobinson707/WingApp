import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import MainText from '../../../components/UI/MainText/MainText';
import ButtonWithBackground from "../../../components/UI/ButtonWithBackground/ButtonWithBackground";
import startConsumerApp from "../StartConsumerApp/StartConsumerApp";

import Icon from "react-native-vector-icons/Ionicons";
import { Divider, Button } from 'react-native-elements';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;
class AuthScreen extends Component {

  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
  }

  loginHandler = () => {
    this.props.navigator.push({
      screen: "wing-app.Login"
    });
  };

  signUpHandler = () => {
    this.props.navigator.push({
      screen: 'wing-app.NameSignUp'
    })
  }

  quickShit = () => {
    startConsumerApp();
  };

  render() {
    return <LinearGradient colors={["#316484", "#949DA2"]} style={styles.gradientContainer}>
        <View style={styles.loginButton}>
          <ButtonWithBackground style={{ borderWidth: 0 }} textStyle={{ color: "white", fontSize: 18 }} onPress={this.loginHandler}>
            Log in
          </ButtonWithBackground>
        </View>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={require("../../../assets/whitelogo.png")} style={{ width: 60, height: 60 }} />
            <MainText
              style={{ fontSize: 65, color: "white", fontWeight: "500" }}
            >
              Hello
            </MainText>
            <MainText
              style={{ color: "white", fontSize: 25, fontWeight: "400" }}
            >
              Let's get started.
            </MainText>
          </View>
          <View style={styles.inputContainer}>
            <ButtonWithBackground color="#29aaf4" style={[styles.buttonContainer, { borderColor: "white", backgroundColor: "transparent" }]} textStyle={[styles.buttonText, { color: "white" }]} onPress={this.quickShit}>
              Continue With Facebook
            </ButtonWithBackground>
            <Divider style={styles.divider} />
            <ButtonWithBackground color="#29aaf4" style={[styles.buttonContainer, { borderColor: "white", backgroundColor: "transparent" }]} textStyle={[styles.buttonText, { color: "white" }]} onPress={this.signUpHandler}>
              Sign Up
            </ButtonWithBackground>
          </View>
        </View>
      </LinearGradient>;
  }
};


/*<View style={{ width: screenWidth, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Image
          source={require('../../../assets/bottom.png')}
          style={{ width: screenWidth, height: 200 }} />
      </View>*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: screenHeight,
    },
    gradientContainer: {
      flex: 1
    },
    topContainer: {
      flex: 0.4,
      width: screenWidth * .9,
      paddingBottom: screenWidth * .1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    buttonStyle: {
      borderColor: 'white'
    },
    buttonText: { 
      color: "white", 
      fontSize: 15, 
      fontWeight: "400", 
      fontFamily: "Montserrat-Black",
      letterSpacing: 1
    },
    inputContainer: {
        width: "90%",
        justifyContent: 'flex-end'
    },
    text: {
      color: 'white'
    },
    loginButton: {
      width: screenWidth,
      marginTop: screenWidth * 0.1,
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    buttonContainer: { 
      borderColor: "white", 
      backgroundColor: "white" ,
      height: screenHeight * 0.06,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
    color: "#1EA8E6",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Helvetica"
  },
  divider: {
    backgroundColor: 'transparent',
    margin: 5
  }
});

export default AuthScreen;