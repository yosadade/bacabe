import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors} from '../../utils';
import {Header, Input, Gap, Button} from '../../components';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <RenderStatusBar />
      <RenderHeader navigation={navigation} />
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

const RenderHeader = ({navigation}) => {
  return <Header title="Daftar Akun" onPress={() => navigation.goBack()} />;
};

const RenderInput = () => {
  return (
    <View style={styles.input}>
      <Input label="Full Name" />
      <Gap height={24} />
      <Input label="Pekerjaan" />
      <Gap height={24} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
    </View>
  );
};

const RenderButton = ({navigation}) => {
  return (
    <View style={styles.button}>
      <Button
        title="Continue"
        type="secondary"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  input: {
    padding: 40,
  },
  button: {
    paddingHorizontal: 40,
  },
});
