import React, { Component } from 'react';
import { View, Dimensions, ScrollView, Text, StyleSheet } from 'react-native';

import { Tile, Divider } from 'react-native-elements';

import HeadingText from '../UI/HeadingText/HeadingText';
import MainText from '../UI/MainText/MainText';

class DeliveryListing extends Component {
  
  constructor(props) {
    super(props);
  }

    render() {
        return <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <View style={{width: Dimensions.get('window').width * .9, flexDirection: 'row', alignItems: 'flex-start'}}>
              <MainText style={{fontSize: 24, fontWeight: '300'}}>Restaurants</MainText>
            </View>
            <View style={styles.tileContainers}>
              <Tile 
                imageSrc={require("../../assets/starbs.jpg")} 
                title="Starbucks" 
                imageContainerStyle={{borderRadius: 100, borderWidth: 1, borderColor: "#fff", backgroundColor: 'red'}} 
                featured caption="for all my basic white women. luv yall." 
                width={Dimensions.get("window").width * 0.8} 
                onPress={() => this.props.navigator.push({screen: 'wing-app.StarbucksListing'})}/>
            </View>
            <Divider style={{backgroundColor: '#eee', height: 1, width: Dimensions.get('window').width * .75, marginTop: 20, marginBottom: 5}} />
            <View style={styles.tileContainer}>
              <Tile 
                imageSrc={require("../../assets/cha.jpg")} 
                title="Cha For Tea" 
                featured 
                caption="for all my basic asian women. luv yall." 
                width={Dimensions.get("window").width * 0.8} />
            </View>
            <Divider style={{backgroundColor: '#eee', height: 1, width: Dimensions.get('window').width * .75, marginTop: 20, marginBottom: 5}} />
            <View style={styles.tileContainer}>
              <Tile 
                imageSrc={require("../../assets/cha.jpg")} 
                title="Cha For Tea" 
                featured 
                caption="for all my basic asian women. luv yall." 
                width={Dimensions.get("window").width * 0.8} />
            </View>
          </View>
          </ScrollView>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width * 0.9
  },
  tileContainer: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width * 0.95
        
  },
  scrollContainer: {
    flex: 0
  }
});

export default DeliveryListing;