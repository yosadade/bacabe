import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors, fonts} from '../../../utils';

const Label = ({title, backgroundColor, color, marginLeft}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor, marginLeft: marginLeft},
      ]}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = EStyleSheet.create({
  container: {
    height: '20rem',
    width: '60rem',
    marginVertical: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5rem',
    backgroundColor: colors.background.quaternary,
  },
  title: {
    fontSize: '8rem',
    fontFamily: fonts.primary[800],
  },
});
