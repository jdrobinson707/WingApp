import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("ios-menu", 30),
    Icon.getImageSource("md-cart", 25)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "wing-app.FulfillerHomeScreen",
          label: "Fulfiller Screen",
          title: "Fulfiller Screen",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ],
          }
        },
        {
          screen: "wing-app.FulfillerHomeScreen",
          label: "Home Screen",
          title: "Home Screen",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[3],
                title: "Cart",
                id: "shoppingCartToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "wing-app.SideDrawer"
        }
      }
    });
  });
};

export default startMainTabs;

