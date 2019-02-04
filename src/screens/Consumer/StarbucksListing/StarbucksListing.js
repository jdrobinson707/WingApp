import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ButtonWithBackground from '../../../components/UI/ButtonWithBackground/ButtonWithBackground';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import { addItem } from '../../../store/actions/index';

class StarbucksListing extends Component {
    
    componentDidMount() {
        Icon.getImageSource("md-cart", 26).then(cart => {
            this.props.navigator.setButtons({
                rightButtons: [{ id: "cart", icon: cart }]
            });
        });
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type == "NavBarButtonPress") {
            if (event.id == "cart") {
                console.log("Pressed")
                this.props.navigator.push({
                screen: "wing-app.ShoppingCart"
                });
            }
        }
    };

    itemAddedHandler = placeName => {
        this.props.onAddItem(placeName);
    };

    render() {
        return (
      <View style={styles.container}>
        <Text style={{ fontSize: 38 }}>
          welcome to goodburger home of the goodburger
        </Text>
        <ButtonWithBackground
          color="green"
          onPress={this.itemAddedHandler}
          placeName="frap"
        >
          Add Frappucino
        </ButtonWithBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flex: 1
    }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (itemName) => dispatch(addItem("frapp"))
  };
};


export default connect(null, mapDispatchToProps)(StarbucksListing);