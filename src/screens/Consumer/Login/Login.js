import React, { Component } from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import MainText from '../../../components/UI/MainText/MainText';
import DefaultInput from '../../../components/UI/DefaultInput/DefaultInput';
import validate from '../../../utility/validation';

import Icon from 'react-native-vector-icons/Ionicons';
import startConsumerApp from '../../Consumer/StartConsumerApp/StartConsumerApp';

import { tryAuth } from '../../../store/actions/index';
import { connect } from 'react-redux'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

class Login extends Component {

    state = {
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            }
        }
    }

    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };

    constructor(props) {
        super(props);
    }

    backHandler = () => {
        this.props.navigator.pop()
    }

    submitHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onLogin(authData);
        if(this.state.controls.password.valid &&
            this.state.controls.email.valid) {
                startConsumerApp()
            }
        else {
            alert("Invalid Credentials!")
        }
    };

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value, 
                            prevState.controls[key].validationRules)
                    },
                    touched: true
                }
            };
        });
    };

    render() {
        return <LinearGradient colors={["#316484", "#949DA2"]} style={styles.gradientContainer}>
            <View style={{ width: screenWidth, marginTop: screenWidth * 0.1, justifyContent: "flex-end", alignItems: "flex-start" }}>
              <TouchableOpacity onPress={this.backHandler}>
                <View style={styles.backButton}>
                  <Icon size={40} name={"md-arrow-back"} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <View style={styles.topContainer}>
                  <MainText style={{ fontSize: 40, color: "white", fontWeight: "200", borderWidth: 0 }}>
                    Login
                  </MainText>
                </View>
                <View style={styles.topContainer}>
                    <MainText style={styles.labelText}>
                        EMAIL ADDRESS
                    </MainText>
                  <DefaultInput style={styles.inputContainer} value={this.state.controls.email.value} onChangeText={val => this.updateInputState("email", val)} valid={this.state.controls.email.valid} touched={this.state.controls.email.touched} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
                    <MainText style={styles.labelText}>
                        PASSWORD
                    </MainText>
                  <DefaultInput style={styles.inputContainer} value={this.state.controls.password.value} onChangeText={val => this.updateInputState("password", val)} valid={this.state.controls.password.valid} touched={this.state.controls.password.touched} autoCapitalize="none" autoCorrect={false} secureTextEntry />
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
        width: screenWidth * .8,
        paddingBottom: screenWidth * .2,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        borderColor: 'white'
    },
    inputContainer: {
        color: 'white',
        fontSize: 20,
        height: screenHeight * .05,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5
    },
    text: {
        color: 'white'
    },
    labelText: {
        color: 'white',
        fontWeight: '300'
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
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
};

export default connect(null, mapDispatchToProps)(Login);