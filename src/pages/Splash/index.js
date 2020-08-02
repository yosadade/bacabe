import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {fonts, colors} from '../../utils';
import {Logo} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });

  return (
    <View style={styles.page}>
      <RenderStatusBar />
      <RenderLogo />
    </View>
  );
};

const RenderStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.background.primary}
      hidden={true}
    />
  );
};

const RenderLogo = () => {
  return (
    <View>
      <Logo />
      <Text style={styles.title}>Baca berita asik & fleksibel</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
