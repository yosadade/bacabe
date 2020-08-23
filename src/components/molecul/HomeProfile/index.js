import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../../utils';
import {ILMe} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <>
          <Image source={ILMe} style={styles.avatar} />
          <View style={styles.overlay} />
        </>
        <View style={styles.star}>
          <Ionicons name="ios-star" size={14} color={colors.icon.quaternary} />
        </View>
      </View>
      <View>
        <Text style={styles.name}>Yosada Dede</Text>
        <Text style={styles.status}>Premium User</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.background.secondary,
    marginRight: 15,
  },
  overlay: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.background.senary,
  },
  star: {
    position: 'absolute',
    top: 0,
    right: -5,
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
  },
  status: {
    fontSize: 12,
    fontFamily: fonts.primary[800],
    color: colors.text.quinary,
  },
});
