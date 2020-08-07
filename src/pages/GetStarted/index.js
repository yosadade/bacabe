import React from 'react';
import {StyleSheet, Text, View, StatusBar, ImageBackground} from 'react-native';
import {colors, fonts} from '../../utils';
import {Button, Gap, Logo} from '../../components/atom';
import {ILNewspaper} from '../../assets';

const GetStarted = ({navigation}) => {
  return (
    <>
      <ImageBackground source={ILNewspaper} style={styles.page}>
        <RenderStatusBar />
        <RenderLead />
        <RenderButton navigation={navigation} />
      </ImageBackground>
      <View style={styles.overlay} />
    </>
  );
};

const RenderStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.background.primary}
      hidden={false}
    />
  );
};

const RenderLead = () => {
  return (
    <View>
      <Logo />
      <Text style={styles.title}>
        Baca berita jadi lebih asik, mudah & fleksibel
      </Text>
    </View>
  );
};

const RenderButton = ({navigation}) => {
  return (
    <View>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Register')}
      />
      <Gap height={16} />
      <Button
        title="Sign In"
        type="secondary"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[900],
    color: colors.text.senary,
    marginTop: 90,
  },
});
