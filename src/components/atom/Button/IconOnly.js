import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../utils';

const IconOnly = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={22}
        color={colors.icon.primary}
      />
    </TouchableOpacity>
  );
};

export default IconOnly;
