import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors, fonts} from '../../utils';
import {Button, Gap, Logo} from '../../components/atom';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <RenderStatusBar />
      <RenderLead />
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
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 90,
  },
});
