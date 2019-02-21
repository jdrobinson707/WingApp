import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MainText from '../../../components/UI/MainText/MainText';
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


class PaymentMethod extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View style={styles.taskTextBox}>
                    <MainText style={styles.type}>VISA</MainText>
                    <MainText style={styles.taskText}>**** **** **** 5309</MainText>
                    <Icon style={styles.arrow} name="angle-double-right" size={20} color="#CCC" />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: 0.95 * screenWidth,
        height:0.10 * screenHeight
    },
    gradientContainer: {
        paddingTop: 100, // this affects the height of the task for some reason
        // height: 0.1 * screenHeight
        paddingBottom: 70,
        alignItems: "center",
        width: 0.85 * screenWidth,
        elevation: 10

    },
    taskTextBox: {
        position: "absolute",
        backgroundColor: "white",
        width: 0.95 * screenWidth,
        height:0.10 * screenHeight,
        bottom: 0,
        elevation: 5,
    },
    type:{
        paddingTop: 15,
        paddingLeft: 11,
        fontSize: 12,
        color: "#2369cf",
    },
    taskText: {
        paddingTop: 1,
        paddingLeft: 10,
        fontSize: 16
    },
    arrow: {
        position: "absolute",
        right: 20,
        paddingTop: 24
    }
});

export default PaymentMethod;