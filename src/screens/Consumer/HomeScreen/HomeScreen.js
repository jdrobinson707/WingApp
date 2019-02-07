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
  Image,
  Text,
  Animated,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { addMessage } from "../../../store/actions/index";
import MainText from '../../../components/UI/MainText/MainText';
import SuggestionBubble from '../../../components/SuggestionBubble/SuggestionBubble';
import CartItemList from '../../../components/CartItemList/CartItemList';
import { Emitter } from 'react-native-particles';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class HomeScreen extends Component { 

  state = {
    text: "hello"
  }

  static navigatorStyle = {
    navBarButtonColor: "black",
    navBarBackgroundColor: "#fcfcfc",
    navBarNoBorder: true
  };

  componentDidMount() {
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

  constructor(props) {
    super(props);

    Icon.getImageSource("md-home", 30).then(source => {
      settingsIcon = source;
    });
    
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    this.keyboardHeight = new Animated.Value(0);

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

  suggestionPressed = text => {
    this.state.text = text;
  }

  requestHandler = text => {
    Keyboard.dismiss();
    this.props.onAddMessage(text);
    this.props.navigator.push({
      screen: "wing-app.MessageThread"
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.helloContainer}>
          <MainText style={styles.helloText}>Hello Jarod</MainText>
          <View style={styles.subHeaderContainer}>
            <MainText style={styles.subHeaderText}>
              Thursday 17 January
            </MainText>
            <Icon size={25} name={"md-sunny"} type="ionicon" color="black" style={styles.weatherIconStyle} />
            <MainText style={styles.subHeaderText}>58°</MainText>
          </View>
        </View>
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
          fromPosition={{ x: screenWidth*0.05, y: 0 }}
        >
          <Text style={{}}>🍆</Text>
        </Emitter>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} blurOnSubmit={true} multiline={true} onChangeText={text => this.setState(
            { text }
          )} value={this.props.message[0]} placeholder="What do you need today?" placeholderTextColor="#777777" />
          <TouchableOpacity text={this.state.text} onPress={this.requestHandler}>
            <View style={styles.continueButton}>
              <Icon size={35} name={"md-arrow-dropright"} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.suggestionsContainer}>
          <View style={styles.bubbleContainer}>
              <SuggestionBubble onPress={this.suggestionPressed}>Deliver a Camel to Martin</SuggestionBubble>
              <SuggestionBubble>Set my alarm for 8pm</SuggestionBubble>
            </View>
          <View style={styles.bubbleContainer}>
              <SuggestionBubble>Fix my sad life pls</SuggestionBubble>
              <SuggestionBubble>Order Dinner</SuggestionBubble>
              <SuggestionBubble>Book a flight</SuggestionBubble>
            </View>
        </View>
        <View style={styles.exploreContainer}>
            <MainText style={styles.headerText}>Explore</MainText>
            <ScrollView contentContainerStyle={{flexDirection: 'row', paddingRight: 15, width: screenWidth*1.7, justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
            </ScrollView>
        </View>
        <View style={styles.exploreContainer}>
            <MainText style={styles.headerText}>Explore</MainText>
            <ScrollView contentContainerStyle={{flexDirection: 'row', paddingRight: 15, width: screenWidth*1.7, justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../assets/starbs.jpg')} style={{width: 200, height: 200, borderRadius: 5}} />
              </TouchableOpacity>
            </ScrollView>
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
    paddingTop: screenHeight*0.02
  },
  helloText: {
    fontSize: 40,
    fontWeight: "700"
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
    fontWeight: "300"
  },
  textInput: {
    width: screenWidth * 0.8,
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
    width: screenWidth*0.9
  },
  bubbleContainer: {
    flexDirection: 'row',
    width: screenWidth * 0.9
  },
  exploreContainer: {
    flex: 0.16,
    width: screenWidth*0.9,
    backgroundColor: "#fcfcfc",
    alignItems: "flex-start"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "300"
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


/*
<View style={{ flex: 1, backgroundColor: "#fcfcfc" }}>
        <View style={{ flex: 1, alignItems: "center" }} behavior="padding" keyboardVerticalOffset='300' enabled>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View behavior="padding" style={{ flex: 2, width: screenWidth, alignItems: "center", justifyContent: "center" }}>
              <View style={{paddingTop: 40}}>
                <MainText style={{ fontSize: 40, padding: 8, margin: 5, color: "black", fontWeight: '700' }}>
                  Hello Jarod
                </MainText>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: screenWidth * 0.7 }}>
                <MainText style={{ fontSize: 15, color: "#6B6B6B", marginBottom: screenHeight*0.05, fontWeight: '300' }}>
                  Thursday 17 January
                  </MainText>
                  <Icon size={25} name={"md-sunny"} type="ionicon" color="black" style={{marginBottom: screenHeight*0.05}} />
                <MainText style={{ fontSize: 15, fontWeight: '300', color: "#6B6B6B", marginBottom: screenHeight*0.05 }}>58°</MainText>
              </View>
            </View>
          </TouchableWithoutFeedback>
        <View style={{ shadowColor: 'black', elevation: 1, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.2, width: screenWidth * 0.95, height: 60, flexDirection: "row", alignItems: "center", justifyContent: "center", borderColor: "#CCCCCC", borderWidth: 1, borderRadius: 5, backgroundColor: "white" }}>
          <TextInput style={{ width: screenWidth * 0.8, justifyContent: "center", fontSize: 14, fontWeight: '200', fontFamily: 'Montserrat-Black', color: "#333333" }} blurOnSubmit={true} multiline={true} onChangeText={text => this.setState(
                  { text }
          )} value={this.props.message[0]} placeholder="What do you need today?" placeholderTextColor="#777777" />
            <TouchableOpacity text={this.state.text} onPress={this.requestHandler}>
              <View style={styles.continueButton}>
                <Icon size={20} name={"md-mic"} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 10, width: screenWidth }} />
          </TouchableWithoutFeedback>
        </View>
      </View>;
  }
  */