import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils';

const Link = ({title, size, color, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align, color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align, color) => ({
    fontSize: size,
    textAlign: align,
    color: color,
    fontFamily: fonts.primary[900],
    textDecorationLine: 'underline',
  }),
});
