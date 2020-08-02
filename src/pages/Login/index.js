import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, Input, Link, Button} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <RenderStatusBar />
      <RenderLead />
      <RenderInput />
      <RenderButton navigation={navigation} />
    </View>
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
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
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
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  lead: {
    padding: 40,
    paddingBottom: 0,
  },
  logo: {
    fontSize: 40,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  wrapTitle: {
    maxWidth: 167,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
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
