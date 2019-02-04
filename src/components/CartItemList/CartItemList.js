import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CartItem from "../CartItem/CartItem";

placeSelectedHandler = key => {
    this.setState(prevState => {
        return {
            selectedPlace: prevState.places.find(place => {
                return place.key === key;
            })
        };
    });
};

const cartItemList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.cartItems}
            renderItem={(info) => (
                <CartItem
                    itemName={info.item.name}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default cartItemList;
