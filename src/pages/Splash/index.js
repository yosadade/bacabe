import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
    <View style={styles.logo}>
      <Logo />
      <Text style={styles.title}>Baca berita asik & fleksibel</Text>
    </View>
  );
};

export default Splash;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: '17rem',
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
