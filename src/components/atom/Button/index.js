import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.button.secondary : colors.button.primary,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
  }),
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
});
