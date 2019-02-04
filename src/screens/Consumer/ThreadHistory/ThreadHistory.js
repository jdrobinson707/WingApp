import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import HeadingText from '../../../components/UI/HeadingText/HeadingText';
import MainText from '../../../components/UI/MainText/MainText';
import CartItemList from '../../../components/CartItemList/CartItemList';

import { List, ListItem } from 'react-native-elements';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const list = [
  {
    name: "Task 1",
    subtitle: '9/12/18'
  },
  {
    name: "Task 2",
    subtitle: '10/2/18'
  },
  {
    name: "Task 3",
    subtitle: '1/2/19'
  },
  {
    name: "Task 4",
    subtitle: '1/8/19'
  }
]

class ThreadHistory extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    Promise.all([Icon.getImageSource("md-return-left", 30)]).then(sources => {
      this.props.navigator.setButtons({
        leftButtons: [
          {
            id: "returnToHomeScreen",
            icon: sources[0]
          }
        ]
      });
    });
  }

  onNavigatorEvent = event => {
    if (event.type == "NavBarButtonPress") {
      if (event.id === "returnToHomeScreen") {
        this.props.navigator.pop();
      }
    }
  };
  
  render() {
    return <View style={[styles.container, { width: screenWidth }]}>
        <MainText>
          <HeadingText style={styles.headerText}>
            Threads
          </HeadingText>
        </MainText>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <List containerStyle={{marginBottom: 200, width: 400, height: screenHeight*0.2}} >
          {
            list.map((l) => (
              <ListItem
                roundAvatar
                key={l.name}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
            }
          </List>
        </View>
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
    fontSize: 48,
    fontWeight: '500'
  }
});


export default connect(null)(ThreadHistory);
