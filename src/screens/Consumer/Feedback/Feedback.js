import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Feedback extends Component {
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
      <View>
        <Text>Feedback</Text>
      </View>
    );
  }
}

export default Feedback;
