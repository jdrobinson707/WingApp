import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, Platform, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import DefaultInput from "../../../components/UI/DefaultInput/DefaultInput";
import ButtonWithBackground from "../../../components/UI/ButtonWithBackground/ButtonWithBackground";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

class Help extends Component {
    

    componentDidMount() {
        Icon.getImageSource(
            Platform === "android" ? "md-chatbubbles" : "md-chatbubbles",
            26
        ).then(cart => {
            Icon.getImageSource("md-menu", 27).then(sideDrawer => {
                this.props.navigator.setButtons({
                    rightButtons: [{ id: "cart", icon: cart }],
                    leftButtons: [{ id: "sideDrawer", icon: sideDrawer }]
                });
            });
        });
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.state = {text: 'How can we assist you?'};
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
                        screen: "wing-app.Promotions",
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
                case "linkHelp":
                    this.props.navigator.toggleDrawer({
                        side: "left",
                        animated: true
                    })
                    this.props.navigator.resetTo({
                        screen: "wing-app.Help",
                        animated: false
                    })
                    break;
                case "linkSettings":
                    this.props.navigator.toggleDrawer({
                        side: 'left',
                        animated: true
                    })
                    this.props.navigator.resetTo({
                        screen: "wing-app.Settings",
                        animated: false
                    })
                    break;
            }
        }
    };

    submitHelp = () => { alert("Help Submitted!") }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>
                        Get help, now 
                    </Text>
                    <TextInput
                        style={[styles.textStyle, styles.textBox]}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        multiline= {true}
                        onFocus= {() => this.setState({text : ''})}
                    />

                </View>
            
                <View style={styles.inputContainer}>
                    <ButtonWithBackground style={styles.buttonContainer} textStyle={[styles.buttonText, { color: "white" }]} onPress={this.submitHelp}>
                        SUBMIT
                    </ButtonWithBackground>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topText: {
        fontFamily: "Montserrat-Black",
        color:"#868686",
        fontSize: 22,
        marginLeft: screenWidth * .02
    },
    topContainer: {
        marginTop: screenHeight * .05,
        marginHorizontal: screenWidth * .1,
        paddingBottom: screenWidth * .1,
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    textBox: {
        height: screenHeight * .15,
        marginTop: screenHeight *.01,
        borderColor: "#BEBEBE",
        borderWidth: 2,
        borderRadius: 7,
        textAlignVertical: 'top',
        paddingHorizontal: screenWidth * .03

    },
    buttonText: { 
        color: "white", 
        fontSize: 13, 
        fontWeight: "400", 
        fontFamily: "Montserrat-Black",
        letterSpacing: 1,

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: { 
      backgroundColor: "#7FBCCE" ,
      height: screenHeight * 0.08,
      width: screenWidth,
      borderRadius: 0,
      borderColor: 'transparent',
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
    color: "#868686",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat-Black"
  }
});
export default Help;
