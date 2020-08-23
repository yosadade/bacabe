import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 60,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.background.quaternary,
  },
  title: {
    fontSize: 8,
    fontFamily: fonts.primary[600],
  },
});
