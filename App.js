import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";

import AuthScreen from './src/screens/Consumer/AuthScreen/AuthScreen';
import ConsumerHomeScreen from './src/screens/Consumer/HomeScreen/HomeScreen';
import SideDrawer from "./src/screens/Consumer/SideDrawer/SideDrawer";
import DeliveryListing from './src/components/DeliveryListing/DeliveryListing';
import Promotions from './src/screens/Consumer/Promotions/Promotions';
import StarbucksListing from './src/screens/Consumer/StarbucksListing/StarbucksListing';

import configureStore from './src/store/configureStore';
import Login from './src/screens/Consumer/Login/Login';
import NameSignUp from './src/screens/Consumer/NameSignUp/NameSignUp';
import EmailSignUp from './src/screens/Consumer/EmailSignUp/EmailSignUp';
import Payment from './src/screens/Consumer/Payment/Payment';
import TaskHistory from './src/screens/Consumer/TaskHistory/TaskHistory';
import Feedback from './src/screens/Consumer/Feedback/Feedback';
import Settings from './src/screens/Consumer/Settings/Settings';
import Help from './src/screens/Consumer/Help/Help';
import ThreadHistory from './src/screens/Consumer/ThreadHistory/ThreadHistory';
import MessageThread from './src/screens/Consumer/MessageThread/MessageThread';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "wing-app.Authscreen", 
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.ConsumerHomeScreen",
  () => ConsumerHomeScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.SideDrawer", 
  () => SideDrawer
);

Navigation.registerComponent(
  "wing-app.ThreadHistory", 
  () => ThreadHistory,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Promotions",
  () => Promotions,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.DeliveryListing",
  () => DeliveryListing,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.StarbucksListing",
  () => StarbucksListing,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Login",
  () => Login,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.NameSignUp",
  () => NameSignUp,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.EmailSignUp",
  () => EmailSignUp,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Payment",
  () => Payment,
  store, 
  Provider
);

Navigation.registerComponent(
  "wing-app.TaskHistory",
  () => TaskHistory,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Feedback",
  () => Feedback,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Settings",
  () => Settings,
  store,
  Provider
);

Navigation.registerComponent(
  "wing-app.Help",
  () => Help,
  store,
  Provider
)

Navigation.registerComponent(
  "wing-app.MessageThread",
  () => MessageThread,
  store,
  Provider
)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "wing-app.Authscreen",
    title: "Login"
  }
});