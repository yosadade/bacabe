import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
  Banner,
  HotTopic,
  LatestNews,
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
          backgroundColor: colors.background.primary,
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
          if (route.name === 'News') {
            return (
              <MaterialCommunityIcons
                name="newspaper"
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Bookmark') {
            return <MaterialIcons name="book" size={size} color={color} />;
          } else if (route.name === 'Setting') {
            return (
              <FontAwesome5 name="user-circle" size={size} color={color} />
            );
          }
        },
      })}>
      <Tab.Screen name="News" component={Home} />
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
      <Stack.Screen name="Banner" component={Banner} />
      <Stack.Screen name="HotTopic" component={HotTopic} />
      <Stack.Screen name="LatestNews" component={LatestNews} />
    </Stack.Navigator>
  );
};

export default Router;
