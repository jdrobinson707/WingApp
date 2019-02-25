import React, { Component } from "react";
import {View, Text, Dimensions, StyleSheet, TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import DefaultInput from "../../../components/UI/DefaultInput/DefaultInput";
import ButtonWithBackground from "../../../components/UI/ButtonWithBackground/ButtonWithBackground";
import HeadingText from "../../../components/UI/HeadingText/HeadingText";
import MainText from "../../../components/UI/MainText/MainText";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

class Promotions extends Component {
  componentDidMount() {
    Icon.getImageSource("md-cart", 26).then(cart => {
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
    this.state = {text: 'XXXX'};
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

  submitCode = () => { alert("Code Submitted!") }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <MainText>
                    <Text style={{ fontSize: 28, fontWeight: "300" }}>GOT A </Text>
                    <HeadingText style={styles.headerText}>CODE?</HeadingText>
                </MainText>

                <TextInput
                    style={[styles.inputTextStyle, styles.textBox]}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    multiline= {true}
                    onFocus= {() => this.setState({text : ''})}
                />

            </View>

            <View style={styles.buttonContainer}>
                <ButtonWithBackground style={styles.submitButton} textStyle={[styles.buttonText, { color: "white" }]} onPress={this.submitCode}>
                    SUBMIT
                </ButtonWithBackground>
            </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 22,
        color: "#999",
        fontWeight: "200",
        fontFamily: "Montserrat-Light",
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#F6F6F6"
    },
    topText: {
        fontSize: 42
    },
    topContainer: {
        paddingTop: screenHeight * .1,
        paddingBottom: screenWidth * .1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textBox: {
        height: screenHeight * .15,
        width: screenWidth * .85,
        marginTop: screenHeight *.03,
        borderBottomColor: "#7FBCCE",
        borderBottomWidth: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        letterSpacing: 10
    },
    buttonText: {
        color: "white",
        fontSize: 13,
        fontWeight: "200",
        fontFamily: "Montserrat-Black",
        letterSpacing: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    submitButton: {
        backgroundColor: "#7FBCCE" ,
        height: screenHeight * 0.08,
        width: screenWidth,
        borderRadius: 0,
        borderColor: 'transparent',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTextStyle: {
        color: "#333333",
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: "Montserrat-Black"
    },
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center'
    }
});

export default Promotions;
