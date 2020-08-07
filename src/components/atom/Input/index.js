import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, value, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border.primary);

  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };

  const onBlurForm = () => {
    setBorder(colors.border.primary);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 6,
    fontFamily: fonts.primary[900],
  },
  input: border => ({
    backgroundColor: colors.background.tertiary,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: border,
    color: colors.text.quinary,
    fontFamily: fonts.primary[900],
  }),
});
