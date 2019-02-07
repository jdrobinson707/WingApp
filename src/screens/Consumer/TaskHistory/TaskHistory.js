import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./Task";
import MainText from '../../../components/UI/MainText/MainText';
// import connect from "react-redux/es/connect/connect";
import {connect} from "react-redux";
import {addMessage} from "../../../store/actions/index";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class TaskHistory extends Component {

    componentDidMount() {
        Icon.getImageSource("md-cart", 26).then(cart => {
            Icon.getImageSource("md-menu", 27).then(sideDrawer => {
                this.props.navigator.setButtons({
                    rightButtons: [{id: "cart", icon: cart}],
                    leftButtons: [{id: "sideDrawer", icon: sideDrawer}]
                });
            });
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
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.greetingContainer}>
                    <MainText style={styles.greeting}>What you've been up to</MainText>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                </View>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30, color: "black", fontWeight: "200", borderWidth: 0
    },
    container:{
        height: screenHeight * 1.5,
        // alignItems: 'center',
        paddingTop: 30

    },
    greetingContainer: {
        // flex: 0.05,
        alignItems: 'center',
        justifyContent: 'center'
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