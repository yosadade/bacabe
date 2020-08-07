import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {colors} from '../../utils';
import {Header, Input, Gap, Button} from '../../components';
import {ILNewspaper} from '../../assets';

const Register = ({navigation}) => {
  return (
    <ImageBackground source={ILNewspaper} style={styles.page}>
      <RenderStatusBar />
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

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  input: {
    padding: 40,
  },
  button: {
    paddingHorizontal: 40,
  },
});
