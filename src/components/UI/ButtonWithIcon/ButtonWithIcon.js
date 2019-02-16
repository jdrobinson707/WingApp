import React from "react";
import { TouchableOpacity, Image, View, StyleSheet, Component } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const myIcon = <Icon name="rocket" size={30} color="#900" />;

class buttonWithIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };
    }
    render() {
        return (
        <TouchableOpacity onPress={props.onPress}>
      <Icon name={props.name} style={props.style}/>
  </TouchableOpacity>)
    }
  
};

const styles = StyleSheet.create({
    container: {
        width: 50, 
        height: 50
    },
    icon: {
        fontSize: 40
    }
})


export default buttonWithIcon;
