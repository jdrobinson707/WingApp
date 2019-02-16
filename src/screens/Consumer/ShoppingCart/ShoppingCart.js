import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import MainText from '../../../components/UI/MainText/MainText';

class ShoppingCart extends Component {
  
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    Promise.all([
      Icon.getImageSource("md-return-left", 30)
    ]).then(sources => {
      this.props.navigator.setButtons({
        leftButtons: [
          {
            id: 'returnToHomeScreen',
            icon: sources[0]
          }
        ]
      });
    });
  }

  onNavigatorEvent = event => {
    if (event.type == "NavBarButtonPress") {
      if (event.id === "returnToHomeScreen") {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    return <View style={[styles.container, { width: Dimensions.get("window").width }]}>
        <MainText>
          <HeadingText style={styles.headerText}>Order Summary</HeadingText>
        </MainText>
      </View>;
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

export default ShoppingCart;
