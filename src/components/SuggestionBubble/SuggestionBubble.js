import React from 'react';
import { 
    TouchableOpacity, 
    Platform,
    TouchableNativeFeedback, 
    Text, 
    View, 
    StyleSheet 
} from 'react-native';

const SuggestionBubble = props => {
    const content = (
        <View {...props} style={[styles.button, props.style]}>
            <Text style={[styles.textStyle, props.textStyle]}>{props.children}</Text>
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
        height: 35,
        padding: 10,
        margin: 5,
        borderColor: '#CCCCCC',
        shadowColor: "black",
        elevation: 1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 12,
        fontWeight: "300",
        color: '#333333'
    }
});

export default SuggestionBubble;