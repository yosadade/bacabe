import React from 'react';
import {StyleSheet, Text, View, StatusBar, ImageBackground} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, Input, Link, Button} from '../../components';
import {ILNewspaper} from '../../assets';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={ILNewspaper} style={styles.page}>
      <RenderStatusBar />
      <RenderLead />
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

const RenderLead = () => {
  return (
    <View style={styles.lead}>
      <Text style={styles.logo}>Bacabaca</Text>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Masuk dan mulai membaca</Text>
      </View>
    </View>
  );
};

const RenderInput = () => {
  return (
    <View style={styles.input}>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" secureTextEntry />
      <Gap height={10} />
      <Link
        title="Forgot My Password"
        size={12}
        color={colors.text.septenary}
      />
    </View>
  );
};

const RenderButton = ({navigation}) => {
  return (
    <View style={styles.button}>
      <Button
        title="Sign In"
        type="secondary"
        onPress={() => navigation.replace('MainApp')}
      />
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        color={colors.text.septenary}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  lead: {
    padding: 40,
    paddingBottom: 0,
  },
  logo: {
    fontSize: 40,
    fontFamily: fonts.primary[900],
    color: colors.text.primary,
    textAlign: 'center',
  },
  wrapTitle: {
    maxWidth: 167,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[900],
    color: colors.text.primary,
    marginTop: 40,
  },
  input: {
    padding: 40,
  },
  button: {
    paddingHorizontal: 40,
  },
});
