import React from 'react';
import {Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
        <Text style={styles.status}>Yogyakarta</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = EStyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: '50rem',
    height: '50rem',
    borderRadius: '50rem',
    backgroundColor: colors.background.secondary,
    marginRight: '15rem',
  },
  overlay: {
    position: 'absolute',
    width: '50rem',
    height: '50rem',
    borderRadius: '50rem',
    backgroundColor: colors.background.senary,
  },
  star: {
    position: 'absolute',
    top: 0,
    right: '-5rem',
    height: '18rem',
    width: '18rem',
    borderRadius: '18rem',
    backgroundColor: colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: '15rem',
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
  },
  status: {
    fontSize: '12rem',
    fontFamily: fonts.primary[800],
    color: colors.text.quinary,
  },
});
