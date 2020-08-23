import React from 'react';
import {Text, View, StatusBar, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts} from '../../utils';
import {Button, Gap, Logo} from '../../components/atom';
import {ILNewspaper} from '../../assets';

const GetStarted = ({navigation}) => {
  return (
    <>
      <ImageBackground source={ILNewspaper} style={styles.page}>
        <RenderStatusBar />
        <RenderOverlay />
        <RenderLead />
        <RenderButton navigation={navigation} />
      </ImageBackground>
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

const RenderOverlay = () => {
  return <View style={styles.overlay} />;
};

export default GetStarted;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: '20rem',
    paddingVertical: '20rem',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: '25rem',
    fontFamily: fonts.primary[900],
    color: colors.text.senary,
    marginTop: '90rem',
  },
  overlay: {
    width: '2000rem',
    height: '2000rem',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
