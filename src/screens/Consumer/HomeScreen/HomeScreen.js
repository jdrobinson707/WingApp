import React, { Component } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  ScrollView,
  Text,
  Image
} from "react-native";

import firebase from 'react-native-firebase';

import type { Notification } from 'react-native-firebase';

import GlobalStyles from '../../../components/UI/GlobalStyles/GlobalStyles'
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { submitRequest } from "../../../store/actions/index";
import MainText from '../../../components/UI/MainText/MainText';
import { Emitter } from 'react-native-particles';

import SuggestionBubble from '../../../components/SuggestionBubble/SuggestionBubble';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class HomeScreen extends Component {
  state = {
    currentUserName: null,
    textRequest: null,
    offsetY: new Animated.Value(0),
    helloFadeAnim: new Animated.Value(1),
    scrollY: new Animated.Value(0),
    stickyHeader: false,
    showScrollUpView: true
  }

  static navigatorStyle = {
    navBarButtonColor: "black",
    navBarBackgroundColor: "#fcfcfc",
    navBarNoBorder: true
  };

  componentDidMount() {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log(fcmToken)
        } else {
          token = fcmToken;
        }
      });
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {

    });
    
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {

    });

    this.createNotificationListeners();

    this.setState({currentUserName: currentUser.email})
    Icon.getImageSource(
      "md-chatbubbles",
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

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.showAlert(title, body);
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body) {
    alert(
      title, body,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }


  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();

  }

  constructor(props) {
    super(props);
    Icon.getImageSource("md-home", 30).then(source => {
      settingsIcon = source;
    });

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

  }

  onNavigatorEvent = event => {
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
    } else if (event.type == "NavBarButtonPress") {
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

  requestHandler = () => {
    Keyboard.dismiss();
    console.log(this.state.textRequest);
    this.props.onAddRequest(this.state.textRequest);
    this.props.navigator.push({
      screen: "wing-app.MessageThread"
    });
  };

  raiseTextInput() {
    Animated.timing(
      this.state.offsetY,
      {
        toValue: -screenHeight * 0.1,
        duration: 200
      }
    ).start();
    Animated.timing(
      this.state.helloFadeAnim,
      {
        toValue: 0,
        duration: 200
      }
    ).start();
    this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
  }

  resetView() {
    this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
  }

  lowerTextInput() {
    Animated.timing(
      this.state.offsetY,
      {
        toValue: 0,
        duration: 200
      }
    ).start();
    Animated.timing(
      this.state.helloFadeAnim,
      {
        toValue: 1,
        duration: 200
      }
    ).start();
    console.log(this.state.scrollY);

  }

  handleScroll = (event) => {
    console.log("tagged")
    this.state.stickyHeader = this.state.scrollY._value > 100;
  }

  render() {
    return (
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          { listener: (event) => this.handleScroll() }
        )}
        ref='_scrollView'
        contentContainerStyle={styles.container} >
        <Animated.View style={[styles.helloContainer, { opacity: this.state.helloFadeAnim }]}>
          <MainText style={GlobalStyles.largeHeaderText}>{this.state.currentUserName}</MainText>
          <View style={styles.subHeaderContainer}>
            <MainText style={GlobalStyles.largeSubText}>
              Thursday 17 January
            </MainText>
            <Icon size={25} name={"md-sunny"} type="ionicon" color="black" style={styles.weatherIconStyle} />
            <MainText style={GlobalStyles.largeSubText}>58°</MainText>
          </View>
        </Animated.View>
        <Emitter
          style={{}}
          numberOfParticles={500}
          emissionRate={0.1}
          interval={1000}
          particleLife={8000}
          direction={45}
          spread={25}
          speed={50}
          gravity={0}
          width={screenWidth}
          height={screenHeight}
          fromPosition={{ x: screenWidth * 0.05, y: 0 }}
        >
          <Text style={{}}></Text>
        </Emitter>
        <Animated.View style={[styles.inputContainer, { transform: [{ translateY: this.state.offsetY }] }]}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.textInput} onEndEditing={() => this.lowerTextInput()} onFocus={() => this.raiseTextInput()} blurOnSubmit={true} multiline={true} onChangeText={text => this.setState({ textRequest: text })} value={this.state.textRequest} placeholder="What do you need today?" placeholderTextColor="#777777" />
            <TouchableOpacity text={this.state.text} onPress={this.requestHandler}>
              <View style={styles.continueButton}>
                <Icon size={35} name={"md-arrow-dropright"} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View style={[styles.suggestionsContainer, { transform: [{ translateY: this.state.offsetY }] }]}>
          <View style={styles.bubbleContainer}>
            <SuggestionBubble onPress={this.suggestionPressed}>Deliver a Camel to Martin</SuggestionBubble>
            <SuggestionBubble>Set my alarm for 8pm</SuggestionBubble>
          </View>
          <View style={styles.bubbleContainer}>
            <SuggestionBubble>Fix my sad life pls</SuggestionBubble>
            <SuggestionBubble>Order Dinner</SuggestionBubble>
            <SuggestionBubble>Book a flight</SuggestionBubble>
          </View>
          <View style={styles.tipContainer} >
            <Text style={{
              fontSize: 18,
              color: '#6b6b6b',
              fontWeight: '400'
            }}>Tip of the Day</Text>
          </View>
        </Animated.View>
        <View style={styles.exploreContainer}>
          <View style={styles.exploreHeaderContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon size={35} name={"md-compass"} type="ionicon" color="black" />
              <View style={{ width: 10 }}></View>
              <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <MainText style={styles.headerText}>Explore</MainText>
                <MainText style={{ fontSize: 12, color: '#3b3b3b', fontWeight: '300' }}>See what Wing has to offer</MainText>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={[{ width: screenWidth * 0.425, height: screenHeight * 0.18 }, GlobalStyles.cardBorder]} />
              </TouchableOpacity>    
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={[{ width: screenWidth * 0.425, height: screenHeight * 0.18 }, GlobalStyles.cardBorder]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 2,
    alignItems: "center",
    backgroundColor: '#fcfcfc'
  },
  helloContainer: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: screenHeight * 0.02
  },
  subHeaderContainer: {
    flexDirection: "row",
    width: screenWidth * 0.7,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    padding: 3
  },
  subHeaderText: {
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: -1
  },
  textInput: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.05,
    justifyContent: "center",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "200",
    fontFamily: "Montserrat-Black",
    color: "#333333"
  },
  continueButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0.02,
    width: screenWidth * 0.95,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    shadowColor: "black",
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    margin: 10,
    padding: 10
  },
  suggestionsContainer: {
    flex: 0.2,
    width: screenWidth * 0.9,
    alignItems: 'center'
  },
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth * 0.9
  },
  tipContainer: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.125,
    borderColor: '#777777',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: screenHeight * 0.1,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  },
  exploreContainer: {
    flex: 0.16,
    width: screenWidth * 0.95,
    backgroundColor: "#fcfcfc",
    alignItems: "flex-start",
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    borderRadius: 5,
  },
  exploreHeaderContainer: {
    padding: 5,
    margin: 8
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: -2
  }
});

const mapStateToProps = state => {
  return {
    request: state.request.request
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddRequest: (request) => dispatch(submitRequest(request))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
