import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class PaymentItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <TouchableHighlight>
            <View>
                <Text>
                    Card #
                </Text>
            </View>
        </TouchableHighlight>
    }
}

const mapDispatchToProps = () => {
    
}

export default PaymentItem;