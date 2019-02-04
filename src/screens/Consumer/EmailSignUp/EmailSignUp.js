import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import PhoneInput from "react-native-phone-input";
import MainText from "../../../components/UI/MainText/MainText";
import DefaultInput from "../../../components/UI/DefaultInput/DefaultInput";

import Icon from "react-native-vector-icons/Ionicons";

import startConsumerApp from '../StartConsumerApp/StartConsumerApp';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class EmailSignUp extends Component {
    state = {
        controls: {
            email: {
                value: ""
            },
            phoneNumber: {
                value: ""
            },
            password: {
                value: ""
            }
        }
    };

    backHandler = () => {
        this.props.navigator.pop()
    }

    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };

    constructor(props) {
        super(props);
    }

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            };
        });
    };

    submitHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            phoneNumber: this.state.controls.phoneNumber.value,
            password: this.state.controls.password.value
        };
        SendSMS.send({
            body: 'The default body of the SMS!',
            recipients: ['2144550540'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
        });
        startConsumerApp()
    };

    render() {
        return <LinearGradient colors={["#316484", "#949DA2"]} style={styles.gradientContainer}>
            <View style={{ width: screenWidth, marginTop: screenWidth * 0.1, justifyContent: "flex-end", alignItems: "flex-start" }}>
              <TouchableOpacity onPress={this.backHandler}>
                <View style={styles.backButton}>
                  <Icon size={40} name={"md-arrow-back"} color="white" onPress={this.backHandler} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <View style={styles.topContainer}>
                  <MainText
                    style={{
                      fontSize: 40,
                      color: "white",
                      fontWeight: "500",
                      borderWidth: 0
                    }}
                  >
                    Tell us about yourself
                  </MainText>
                </View>
                <View>
                  <DefaultInput placeholder="Email" style={styles.inputContainer} value={this.state.controls.email.value} onChangeText={val => this.updateInputState("email", val)} autoCorrect={false} keyboard="email" />
                  <PhoneInput ref="phone" style={styles.inputContainer} textStyle={{ color: "white", letterSpacing: 3 }} />
                  <DefaultInput placeholder="Password" style={styles.inputContainer} value={this.state.controls.password.value} onChangeText={val => this.updateInputState("password", val)} autoCorrect={false} secureTextEntry />
                </View>
                <View style={styles.continueButton}>
                  <TouchableOpacity onPress={this.submitHandler}>
                    <View style={styles.backButton}>
                      <Icon size={60} name={"md-arrow-dropright-circle"} color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </LinearGradient>;
    }
};

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
        flex: 0.25,
        width: screenWidth * .9,
        paddingBottom: screenWidth * .2,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        borderColor: 'white'
    },
    inputContainer: {
        color: 'white',
        width: screenWidth * .9,
        fontSize: 20,
        height: screenHeight * .05,
        margin: 15,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5
    },
    text: {
        color: 'white'
    },
    backButton: {
        marginLeft: 15,
        marginTop: 15
    },
    continueButton: {
        width: screenWidth * .85,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0.5,
    }
})

export default EmailSignUp;