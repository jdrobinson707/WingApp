import React from 'react';
import { TextInput, StyleSheet, View, Dimensions } from 'react-native';
import MainText from '../../UI/MainText/MainText';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const loginInput = props => (
    <View style={styles.container}>
        <MainText style={{color: 'white'}}>EMAIL ADDRESS</MainText>
        <TextInput
            underlineColorAndroid="transparent"
            {...props}
            style={[
                styles.input,
                props.style,
                !props.valid && props.touched ? styles.invalid : null
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: screenHeight*0.2,
        width: screenWidth*0.8,
        justifyContent: 'space-between'
    },
    input: {
        width: "100%",
        padding: 5,
        margin: 8
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default loginInput;