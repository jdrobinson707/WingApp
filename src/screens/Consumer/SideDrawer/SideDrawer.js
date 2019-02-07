import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import ButtonWithBackground from '../../../components/UI/ButtonWithBackground/ButtonWithBackground';

import {Avatar, List, ListItem} from 'react-native-elements';
import MainText from '../../../components/UI/MainText/MainText';


class SideDrawer extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.props.navigator.setStyle({
            navBarBackgroundColor: "#fcfcfc"
        });
    }

    homeHandler = () => {
        this.props.navigator.handleDeepLink({
            link: "linkHomeScreen"
        });
    };

    taskHistoryHandler = () => {
        this.props.navigator.handleDeepLink({
            link: "linkTaskHistory"
        })
    };

    paymentHandler = () => {
        this.props.navigator.handleDeepLink({
            link: 'linkPayment'
        })
    };

    promotionsHandler = () => {
        this.props.navigator.handleDeepLink({
            link: 'linkPromotions'
        });
    };

    helpHandler = () => {
        this.props.navigator.handleDeepLink({
            link: "linkHelp"
        });
    };

    feedbackHandler = () => {
        this.props.navigator.handleDeepLink({
            link: "linkFeedback"
        });
    };

    settingsHandler = () => {
        this.props.navigator.handleDeepLink({
            link: 'linkSettings'
        })
    };

    render() {
        const list = [
            {
                name: "Home",
                icon: "md-home",
                onPress: this.homeHandler,
                i: 7
            },
            {
                name: "Task History",
                icon: "md-calendar",
                onPress: this.taskHistoryHandler,
                i: 0
            },
            {
                name: "Payment",
                icon: "md-card",
                onPress: this.paymentHandler,
                i: 1
            },
            {
                name: "Promotions",
                icon: "md-pricetags",
                onPress: this.promotionsHandler,
                i: 2
            },
            {
                name: "Help",
                icon: "md-help-circle",
                onPress: this.helpHandler,
                i: 3
            },
            {
                name: "Feedback",
                icon: "md-help-buoy",
                onPress: this.feedbackHandler,
                i: 4
            },
            {
                name: "Settings",
                icon: "md-settings",
                onPress: this.settingsHandler,
                i: 5
            }
        ];

        return (
            <View
                style={[
                    styles.container,
                    {width: Dimensions.get("window").width * 0.8}
                ]}
            >
                <Avatar large rounded
                    source={require("../../../assets/dex.jpg")}
                    activeOpacity={0.7}/>
                <List
                    containerStyle={{
                        marginBottom: 20,
                        width: Dimensions.get("window").width * 0.75
                    }}
                >
                    {list.map(l => (
                        <ListItem
                            key={l.i}
                            title={l.name}
                            leftIcon={{type: "ionicon", name: l.icon}}
                            onPress={l.onPress}
                            containerStyle={styles.option}
                        />
                    ))}
                </List>
                <View style={styles.versionContainer}>
                    <MainText style={styles.versionText}>Wing V1</MainText>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        margin: 5,
        backgroundColor: "white",
        flex: 1
    },
    button: {
        paddingRight: 15
    },
    versionContainer: {
        flex: 1,
        width: Dimensions.get('window').width * .70,
        justifyContent: 'flex-end',
        padding: 20
    },
    versionText: {
        fontSize: 8,
        fontWeight: '400'
    },
    option: {
        justifyContent: 'space-between',
        borderWidth: 0
    }
})

export default SideDrawer;