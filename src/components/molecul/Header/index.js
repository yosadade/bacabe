import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atom';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: '16rem',
    paddingVertical: '20rem',
  },
  title: {
    flex: 1,
    fontSize: '20rem',
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
