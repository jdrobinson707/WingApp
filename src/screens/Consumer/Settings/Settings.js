import React, { Component } from 'react';
import { View, Text, Dimensions, Button, StyleSheet, ImageBackground, TouchableHighlight, Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SuggestionBubble from '../../../components/SuggestionBubble/SuggestionBubble';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class Settings extends Component {

    componentDidMount() {
        Icon.getImageSource("md-cart", 26).then(cart => {
            Icon.getImageSource("md-menu", 27).then(sideDrawer => {
                this.props.navigator.setButtons({
                    leftButtons: [{ id: "sideDrawer", icon: sideDrawer }]
                });
            });
        });
        this.props.navigator.setTitle({
        });
    }

    static navigatorStyle = {
        navBarButtonColor: "black",
        navBarBackgroundColor: "#fcfcfc",
        navBarNoBorder: true
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.props.navigator.setStyle({
            navBarTextColor: '#000000',
            navBarTextFontFamily: 'Montserrat-Black'
        });
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
                    break;
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

    render() {
        return <View style={styles.container}>
            <View style={styles.subscriptionBaitContainer}>
                <Text style={styles.headerText}>
                    You are on our free plan
                </Text>
                <View style={{height: 10}}>
                </View>
                <Text style={[styles.subHeaderText, {letterSpacing: 0}]}>
                    Want to get the most out of Wing?
                </Text>
                <View style={{height: 15}}>
                </View>
                <SuggestionBubble textStyle={{fontWeight: '600'}}>WING PLUS</SuggestionBubble>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.categoryHeaderContainer}>
                    <Text style={styles.subHeaderText}>
                        GENERAL
                    </Text> 
                </View>
                <View style={styles.settingContainer} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>I Call You</Text>
                    <Text style={{color: '#333333', fontSize: 15}}>Martin The Chosen One</Text>
                </View>
                <View style={styles.settingContainer} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>Email</Text>
                    <Text style={{color: '#333333', fontSize: 15}}>xXxThaRealMartinxXx@gmail.com</Text>
                </View>
                <View style={[styles.settingContainer, {borderBottomWidth: 0}]} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>Payment</Text>
                    <Text style={{color: '#333333', fontSize: 15}}>Visa Ending in 4677</Text>
                </View>
                <View style={styles.categoryHeaderContainer}>
                    <Text style={styles.subHeaderText}>
                        PRIVACY
                    </Text> 
                </View>
                <View style={styles.settingContainer} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>Push Notifications</Text>
                    <Switch
                    />
                </View>
                <View style={styles.settingContainer} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>Microphone Permissions</Text>
                    <Switch
                    />
                </View>
                <View style={styles.settingContainer} >
                    <Text style={{color: '#333333', fontSize: 15, fontWeight: '400'}}>Pussy Permissions</Text>
                    <Switch
                    />
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fcfcfc'
    },
    subscriptionBaitContainer: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsContainer: {
        flex: 0.8,
        alignItems: 'center'
    },
    headerText: {
        color: "#333333",
        fontWeight: '600',
        fontSize: 24,
        fontFamily: 'Montserrat-Black'
    },
    subHeaderText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6b6b6b',
        fontFamily: 'Montserrat-Black',
        letterSpacing: 2
    },
    settingContainer: {
        flexDirection: 'row',
        height: screenHeight*0.075, 
        width: screenWidth*0.85, 
        borderColor: '#BCBCBC', 
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryHeaderContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*0.05,
        borderWidth: 1,
        borderColor: '#BCBCBC',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    }
})

export default Settings;