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
            <View style={styles.topContainer}>
                <MainText style={styles.loginText}>
                    Login
                </MainText>
            </View>
            <View>
                <MainText>
                    EMAIL ADDRESS
                </MainText>
            </View>
          </LinearGradient>;
    }
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
        alignItems: 'center'
    },
    topContainer: {
        alignItems: 'flex-start',
        width: screenWidth*0.75
    },
    loginText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '300'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
};

export default connect(null, mapDispatchToProps)(Login);