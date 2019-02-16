import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MainText from '../../../components/UI/MainText/MainText';
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// {"\n"} for newline in text

class Task extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <LinearGradient
                    colors={["#316484", "#949DA2"]}
                    style={styles.gradientContainer}>
                    <View style={styles.taskTextBox}>
                        <MainText style={styles.iNeedWingTo}>I NEED WING TO... </MainText>
                        <MainText style={styles.taskText}>Get me groceries</MainText>
                        <Icon style={styles.arrow} name="angle-double-right" size={30} color="#CCC" />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
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
        width: 0.85 * screenWidth,
        height:0.10 * screenHeight,
        bottom: 0,
        elevation: 5

    },
    iNeedWingTo:{
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
        paddingTop: 16
    }
});

export default Task;