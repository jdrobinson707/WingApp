import React, { Component } from 'react';
import {View, Picker, StyleSheet, Dimensions, TouchableOpacity, Modal} from 'react-native';
import MainText from '../../../components/UI/MainText/MainText';
import Icon from "react-native-vector-icons/Ionicons";
import DefaultInput from '../../../components/UI/DefaultInput/DefaultInput';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class AddPayment extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            paymentType: '',
            cardNumber: '',
            defaultValue: 'Card Number'
        });
    }

    closeModal() {
        this.props.navigator.dismissModal({
            animationType: 'none',
            overrideBackPress: 'true'
        });
    }

    updateType = (paymentType) => {
        this.setState({paymentType: paymentType})
    };

    updateInputState = (value) => {
        this.setState(prevState => {
            return {
                cardNumber: value
            };
        });
    };

    render() {
        return (
            <Modal animationType="fade" transparent={false} style={styles.modalStyle}
                   onRequestClose={() => {this.props.navigator.dismissModal(this.setState({visible: false}));}}>
                <MainText style={styles.modalTitle}>Add Payment</MainText>
                <TouchableOpacity
                    style={styles.modalBackIcon}
                    onPress={() => {this.closeModal();}}>
                    <Icon name="md-arrow-back" size={30} color="#900" />
                </TouchableOpacity>
                <Picker
                    selectedValue={this.state.paymentType}
                    style={styles.dropdown}
                    onValueChange={this.updateType}>
                    <Picker.Item label="Choose Payment Type" value="choose" />
                    <Picker.Item label="Credit/Debit Card" value="card" />
                    <Picker.Item label="Venmo" value="venmo" />
                    <Picker.Item label="Paypal" value="paypal" />
                </Picker>
                <DefaultInput
                    style={styles.inputContainer}
                    defaultValue={this.state.defaultValue}
                    value={this.state.cardNumber}
                    onChangeText={val => this.updateInputState(val)}
                    keyboardType="number-pad"/>

                <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.closeModal();}}>
                    <MainText style={styles.secureText}>SECURE PAYMENT METHOD</MainText>
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle:{
        backgroundColor: "#477696",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    modalTitle: {
        padding: 20,
        fontSize: 30,
        textAlign: "right"
    },
    modalBackIcon: {
        position: "absolute",
        top: 25,
        left: 20,
    },
    dropdown: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40,
        width: 0.85 * screenWidth,
        height:0.04 * screenHeight,
        // backgroundColor: '#EEE',
        left: 35
    },
    secureText:{
        paddingTop: 15,
        paddingLeft: 11,
        fontSize: 14,
        color: "#2369cf",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: 0.95 * screenWidth,
        height:0.10 * screenHeight
    },
    inputContainer: {
        color: 'black',
        width: screenWidth * .9,
        fontSize: 20,
        height: screenHeight * .05,
        margin: 15,
        borderBottomColor: '#2369cf',
        borderBottomWidth: 0.5
    },
});

export default AddPayment;