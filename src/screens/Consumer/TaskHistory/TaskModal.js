import React, {Component} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import MainText from "../../../components/UI/MainText/MainText";
import Icon from "react-native-vector-icons/Ionicons";

class TaskModal extends Component {
    constructor(props) {
        super(props);

    }

    closeModal() {
        this.props.navigator.dismissModal({
            animationType: 'none',
            overrideBackPress: 'true'
        });
    }

    render() {
        return (
            <Modal animationType="fade" transparent={false} style={styles.modalStyle}
                   onRequestClose={() => {this.props.navigator.dismissModal(this.setState({visible: false}));}}>
                <MainText style={styles.modalTitle}>Task Modal</MainText>
                <TouchableOpacity
                    style={styles.modalBackIcon}
                    onPress={() => {this.closeModal();}}>
                    <Icon name="md-arrow-back" size={30} color="#900" />
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle:{
        backgroundColor: "#477696",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        textAlign: "center"
    },
    modalTitle: {
        padding: 20,
        fontSize: 30,
        textAlign: "right"
    },
    modalBackIcon: { // may not want to keep absolute position
        position: "absolute",
        top: 25,
        left: 20,
    }
});

export default TaskModal;