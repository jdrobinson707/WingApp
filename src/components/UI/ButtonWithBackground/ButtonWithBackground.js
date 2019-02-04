import React from 'react';
import { TouchableOpacity, Platform, TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View {...props} style={[styles.button, props.style]}>
            <Text style={props.textStyle}>{props.children}</Text>
        </View>
    );
    if (Platform.OS === 'android') {
        return <TouchableNativeFeedback onPress={props.onPress}>
            {content}
          </TouchableNativeFeedback>;
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
        )
    };

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 15,
        borderWidth: .5,
        alignItems: 'center'
    }
});

export default buttonWithBackground;