import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts, colors} from '../../../utils';

const Logo = () => {
  return (
    <View style={styles.wrapLogo}>
      <Text style={styles.logoPurple}>Ba</Text>
      <Text style={styles.logoWhite}>ca</Text>
      <Text style={styles.logoOrange}>ba</Text>
      <Text style={styles.logoWhite}>ca</Text>
    </View>
  );
};

export default Logo;

const styles = EStyleSheet.create({
  wrapLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPurple: {
    fontSize: '60rem',
    fontFamily: fonts.primary[800],
    color: colors.text.tertiary,
    textAlign: 'center',
  },
  logoWhite: {
    fontSize: '60rem',
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
    textAlign: 'center',
  },
  logoOrange: {
    fontSize: '60rem',
    fontFamily: fonts.primary[800],
    color: colors.text.quaternary,
    textAlign: 'center',
  },
});
