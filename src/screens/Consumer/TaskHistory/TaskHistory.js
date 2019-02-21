import React, {Component} from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./Task";
import MainText from '../../../components/UI/MainText/MainText';
// import connect from "react-redux/es/connect/connect";
import {connect} from "react-redux";
import {addMessage} from "../../../store/actions/index";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const wingLogoImg = require('../../../assets/mainlogo-clear-bg.png');



class TaskHistory extends Component {
    componentDidMount() {
        Icon.getImageSource("md-cart", 26).then(cart => {
            Icon.getImageSource("md-menu", 27).then(sideDrawer => {
                this.props.navigator.setButtons({
                    // rightButtons: [{id: "cart", icon: cart}],
                    // rightButtons: [{id: "cart", icon: wingLogoImg}],
                    // rightButtons: [{id: "WingLogo", component: 'wing-app.WingLogo'}],
                    leftButtons: [
                        {id: "sideDrawer", icon: sideDrawer}
                    ]
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

    static navigatorStyle = {
        navBarButtonColor: "black",
        navBarBackgroundColor: "#fcfcfc",
        navBarNoBorder: true
    };

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
        } else if (event.id == "TaskModal") {
            this.props.navigator.showModal({
                screen: "wing-app.TaskModal"
            })
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

    showTask() {
        this.props.navigator.showModal({
            screen: 'wing-app.TaskModal',
            animationType: 'none',
            overrideBackPress: 'true'
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.greetingContainer}>
                    <MainText style={styles.title}>Task History</MainText>
                    <MainText style={styles.greeting}>What you've been up to</MainText>
                    <Task onPress={()=>{this.showTask();}}/>
                    <Task onPress={()=>{this.showTask();}}/>
                    <Task onPress={()=>{this.showTask();}}/>
                    <Task onPress={()=>{this.showTask();}}/>
                    <Task onPress={()=>{this.showTask();}}/>
                    <Task onPress={()=>{this.showTask();}}/>
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
        // alignItems: 'center',
        paddingTop: 15,
        backgroundColor: "#F6F6F6"
    },
    greetingContainer: {
        // flex: 0.05,
        alignItems: 'center',
        justifyContent: 'center'
    },
    task:{
        elevation: 4,
    }
});

const mapStateToProps = state => {
    return {
        message: state.message.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddMessage: (message) => dispatch(addMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskHistory);