import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';

const startMainTabs = () => {
  Navigation.startSingleScreenApp({
    screen: 
    {
      screen: "wing-app.ConsumerHomeScreen",
    },
    drawer: {
      left: {
        screen: "wing-app.SideDrawer",
        width: Dimensions.get('window').width * .75
      },
      style: {
        drawerShadow: false,
        contentOverlayColor: 'rgba(0,0,0,0.75)'
      }
    },
    appStyle: {
      keepStyleAcrossPush: false
    }
  });
};

export default startMainTabs;

