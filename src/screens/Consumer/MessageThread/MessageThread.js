import React, { Component } from "react";
import { View, Platform, StyleSheet, Dimensions, Text } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from "react-redux";
import { GiftedChat } from 'react-native-gifted-chat';
import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/Ionicons";
import { addMessage } from "../../../store/actions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "black",
    navBarBackgroundColor: "#fcfcfc",
    navBarNoBorder: true
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: this.props.message[0].messageContents,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://getwingapp.com/mob/app/img/assets/mainlogo.png"
          }
        }
      ]
    });
  }

  constructor(props) {
    super(props);
    Icon.getImageSource("md-home", 30).then(source => {
      settingsIcon = source;
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type == "NavBarButtonPress") {
      // this is the event type for button presses
      if (event.id == "cart") {
        this.props.navigator.push({
          screen: "wing-app.ThreadHistory"
        });
      } else if (event.id == "sideDrawer") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <LinearGradient
        colors={["#fcfcfc", "white", "#fcfcfc"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingBottom: 20 }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{ _id: 1 }}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        alignItems: "center",
        width: windowWidth,
        flex: 1
    }
});

const mapStateToProps = state => {
    return { message: state.message.message };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddMessage: (message) => dispatch(addMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

