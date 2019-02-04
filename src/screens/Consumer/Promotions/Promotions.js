import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import MainText from '../../../components/UI/MainText/MainText';

import ButtonWithBackground from '../../../components/UI/ButtonWithBackground/ButtonWithBackground';

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
      <View
        style={[styles.container, { width: Dimensions.get("window").width }]}
      >
        <MainText>
          <Text style={{ fontSize: 28, fontWeight: "300" }}>GOT A </Text>
          <HeadingText style={styles.headerText}>CODE?</HeadingText>
        </MainText>
        <View>
            <Text>
                
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center'
    },
    headerText: {

    }
});

export default Promotions;