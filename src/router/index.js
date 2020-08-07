import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

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
  UploadPhoto,
} from '../pages';
import {colors, fonts} from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.icon.secondary,
        style: {
          height: 60,
          backgroundColor: colors.background.secondary,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 12,
          marginBottom: 10,
          fontFamily: fonts.primary[600],
        },
        tabStyle: {
          marginTop: 10,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return (
              <MaterialCommunityIcons
                name="code-greater-than-or-equal"
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Bookmark') {
            return <Ionicons name="ios-add-circle" size={size} color={color} />;
          } else if (route.name === 'Setting') {
            return <Entypo name="code" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    </Stack.Navigator>
  );
};

export default Router;
