import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet, Platform, ScrollView, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MainText from "../../../components/UI/MainText/MainText";
import PaymentMethod from './PaymentMethod';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class Payment extends Component {
    componentDidMount() {
        Icon.getImageSource("md-cart", 26).then(cart => {
            Icon.getImageSource("md-menu", 27).then(sideDrawer => {
                this.props.navigator.setButtons({
                    // rightButtons: [{ id: "cart", icon: cart }],
                    leftButtons: [{ id: "sideDrawer", icon: sideDrawer }]
                });
            });
        });
        this.props.navigator.setStyle({
            navBarCustomView: 'wing-app.WingLogo',
            navBarComponentAlignment: 'center',
            navBarCustomViewInitialProps: {title: 'WingLogo'},
            drawUnderNavBar: "true",
            topBarElevationShadowEnabled: Platform.OS == 'android' ? "false" : null,
            navBarNoBorder: "true",
        });
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        // this is the event type for button presses
        if (event.id == "cart") {
            this.props.navigator.push({
                screen: "wing-app.ShoppingCart"
            });
        } else if (event.id == "sideDrawer") {
            this.props.navigator.toggleDrawer({
                side: "left"
            });
        }
        if (event.type == "DeepLink") {
            const parts = event.link.split("/");
            switch (parts[0]) {
              case "linkHomeScreen":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.ConsumerHomeScreen",
                  animated: false
                });
                break;
              case "linkTaskHistory":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.TaskHistory",
                  animated: false
                });
              case "linkPayment":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.Payment",
                  animated: false
                });
                break;
              case "linkPromotions":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.Promotions",
                  animated: false
                });
                break;
              case "linkHelp":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.Help",
                  animated: false
                });
                break;
              case "linkFeedback":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.Feedback",
                  animated: false
                });
                break;
              case "linkSettings":
                this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: true
                });
                this.props.navigator.resetTo({
                  screen: "wing-app.Settings",
                  animated: false
                });
                break;
            }
        }
    };

    showPayment() {
        this.props.navigator.showModal({
            screen: 'wing-app.PaymentModal',
            animationType: 'none',
            overrideBackPress: 'true'
        });
    }

    addPayment() {
        this.props.navigator.showModal({
            screen: 'wing-app.AddPayment',
            animationType: 'none',
            overrideBackPress: 'true'
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.greetingContainer}>
                    <MainText style={styles.title}>Payment</MainText>
                    <MainText style={styles.greeting}>Your Payment Methods</MainText>
                    <PaymentMethod onPress={()=>{this.showPayment();}}/>
                    <PaymentMethod onPress={()=>{this.showPayment();}}/>
                    <PaymentMethod onPress={()=>{this.showPayment();}}/>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.addPayment();}}>
                        <MainText style={styles.paymentText}>+ ADD PAYMENT</MainText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 42,
    },
    greeting: {
        fontSize: 22,
        color: "#999",
        fontWeight: "200",
        borderWidth: 0,
        fontFamily: "Montserrat-Light",
        paddingBottom: 20
        // Montserrat already defined in MainText.js
    },
    container:{
        height: screenHeight * 2,
        paddingTop: 15,
        backgroundColor: "#F6F6F6"
    },
    greetingContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    task:{
        elevation: 4,
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
    taskTextBox: {
        position: "absolute",
        backgroundColor: "white",
        width: 0.95 * screenWidth,
        height:0.10 * screenHeight,
        bottom: 0,
        elevation: 5,
    },
    paymentText:{
        paddingTop: 15,
        paddingLeft: 11,
        fontSize: 12,
        color: "#2369cf",
    },
});

export default Payment;