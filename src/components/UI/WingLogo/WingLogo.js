import {Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import React from "react";

const wingLogoImg = require('../../../assets/mainlogo-clear-bg.png');
const screenWidth = Dimensions.get("window").width;


const WingLogo = ({text}) =>
    <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => console.log('pressed me!')}
    >
        <Image style={styles.logo} source={wingLogoImg} width={40} height={40}/>
    </TouchableOpacity>;

const styles = StyleSheet.create({
    logoContainer:{
        width: 50,
        height: 50,
        justifyContent: 'center', // PUTTING LEFT HERE CAUSES APP TO CRASH
        alignItems: 'center',
        // backgroundColor: 'red',
        // position: "absolute",
        // left: 0
    },
    logo: {
        // overflow: 'hidden',
        width: 50,
        height: 50,
        justifyContent: 'center', // PUTTING LEFT HERE CAUSES APP TO CRASH
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default WingLogo;
