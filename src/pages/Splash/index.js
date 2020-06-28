import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Bacaba</Text>
      <Text style={styles.subTitle}>Baca berita terupdate terpercaya</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 70,
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
