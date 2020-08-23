import React from 'react';
import {View, StatusBar, ScrollView, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../utils';
import {Header, Input, Gap, Button} from '../../components';
import {ILNewspaper} from '../../assets';

const Register = ({navigation}) => {
  return (
    <ImageBackground source={ILNewspaper} style={styles.page}>
      <RenderStatusBar />
      <RenderOverlay />
      <RenderHeader navigation={navigation} />
      <RenderInput />
      <RenderButton navigation={navigation} />
    </ImageBackground>
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

const RenderOverlay = () => {
  return <View style={styles.overlay} />;
};

const RenderHeader = ({navigation}) => {
  return <Header title="Daftar Akun" onPress={() => navigation.goBack()} />;
};

const RenderInput = () => {
  return (
    <View style={styles.input}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Input label="Confirm Password" />
      </ScrollView>
    </View>
  );
};

const RenderButton = ({navigation}) => {
  return (
    <View style={styles.button}>
      <Button
        title="Continue"
        type="secondary"
        onPress={() => navigation.navigate('UploadPhoto')}
      />
    </View>
  );
};

export default Register;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  overlay: {
    width: '2000rem',
    height: '2000rem',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  input: {
    padding: '20rem',
    marginTop: '-20rem',
  },
  button: {
    padding: '20rem',
  },
});
