import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import MainText from '../../../components/UI/MainText/MainText';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type == "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            } else if (event.id === "shoppingCartToggle") {
                this.props.navigator.showModal({
                    screen: 'wing-app.ShoppingCart',
                    title: "Shopping Cart"
                })
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Fulfiller shit...</HeadingText>
                </MainText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        alignItems: "center"
    }
});

export default HomeScreen;
