import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
  Animated
} from "react-native";

import { AsyncStorage } from 'react-native';

import firebase from 'react-native-firebase';

import startConsumerApp from '../../Consumer/StartConsumerApp/StartConsumerApp';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class LoadingScreen extends React.Component {

    state = {
        gifTime: new Animated.Value(5000)
    }

    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };

    componentDidMount() {
        this.checkPermission();
        Animated.timing(
            this.state.gifTime,
            {
                duration: 50000
            }).start();
                   firebase.auth().onAuthStateChanged(user => {
            user ? startConsumerApp() : this.props.navigator.push({screen: 'wing-app.Authscreen'});
        });
        const enabled = firebase.messaging().hasPermission();
        if (enabled) {
            console.log("Cloud messaging enabled")
        } else {
            try {
                firebase.messaging().requestPermission();
                // User has authorised
            } catch (error) {
                // reprompt user, must accept permissions or app isnt usable
                console.log("permission denied")
            }
        }
                 }

                 async checkPermission() {
                   const enabled = firebase
                     .messaging()
                     .hasPermission();
                   if (enabled) {
                     this.getToken();
                   } else {
                     this.requestPermission();
                   }
                 }

                 // store fcmtoken in asyncstorage
                 async getToken() {
                   let fcmToken = AsyncStorage.getItem(
                     "fcmToken"
                   );
                   if (!fcmToken) {
                     fcmToken = firebase.messaging().getToken();
                     if (fcmToken) {
                       console.log("token ---- " + fcmToken);
                       // user has a device token
                       AsyncStorage.setItem(
                         "fcmToken",
                         fcmToken
                       );
                     }
                   }
                 }

                 async requestPermission() {
                   try {
                     firebase.messaging().requestPermission();
                     // User has authorised
                     this.getToken();
                   } catch (error) {
                     // User has rejected permissions
                     console.log("permission rejected");
                   }
                 }

                 static navigatorStyle = {
                   navBarButtonColor: "black",
                   navBarBackgroundColor: "#fcfcfc",
                   navBarNoBorder: true
                 };

                 render() {
                   return (
                     <Animated.View style={styles.container}>
                       <Image
                         style={{
                           width: screenWidth,
                           height: screenWidth
                         }}
                         source={require("../../../assets/woah2.gif")}
                       />
                     </Animated.View>
                   );
                 }
               }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})