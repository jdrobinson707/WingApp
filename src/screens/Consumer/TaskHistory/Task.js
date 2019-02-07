import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MainText from '../../../components/UI/MainText/MainText';

class Task extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={["#316484", "#949DA2"]} style={styles.gradientContainer}>
                    <MainText style={{padding: 20}}>Get me 200,000 eggs from Albertsons</MainText>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    gradientContainer: {
        padding: 30
    }
});

export default Task;