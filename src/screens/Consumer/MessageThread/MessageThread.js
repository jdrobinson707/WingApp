import React, { Component } from "react";
import { View, Platform, StyleSheet, Dimensions, Text } from "react-native";
import { Provider } from 'react-redux';
import { connect } from "react-redux";
import { createStore } from 'redux';
import { GiftedChat } from 'react-native-gifted-chat';
import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/Ionicons";
import { submitRequest } from "../../../store/actions";

import { RemoteMessage } from 'react-native-firebase';

import Fire from '../../../../Firebase/Firebase';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class MessageThread extends Component {

  state = {
    messages: [{ _id: 0, text: this.props.request.toString(), createdAt: new Date(), user: { _id: 0, name: "Wing", avatar: "https://getwingapp.com/mob/app/img/assets/mainlogo.png" } }]
  }

  static navigatorStyle = {
    navBarButtonColor: "black",
    navBarBackgroundColor: "#fcfcfc",
    navBarNoBorder: true
  };

  componentDidMount(messages = []) {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );

    this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
      // Process your message as required
    });
  }

  componentWillUnmount() {
    Fire.shared.off();
  }

  constructor(props) {
    super(props);
    Icon.getImageSource("md-home", 30).then(source => {
      settingsIcon = source;
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  get user() {
    // Return our name and our UID for GiftedChat to parse
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
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
              onSend={Fire.send}
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
  return { request: state.request.request };
}

export default connect(mapStateToProps, null)(MessageThread);

