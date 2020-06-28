import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  Home,
  Bookmark,
  Setting,
  GetStarted,
  Register,
  Login,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   // <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Bookmark" component={Bookmark} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>;
// };

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* <Stack.Screen name="MainApp" component={MainApp} /> */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Router;
