import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? (
        <AntDesign name="home" size={22} color="black" />
      ) : (
        <AntDesign name="home" size={22} color="grey" />
      );
    }
    if (title === 'Bookmark') {
      return active ? (
        <MaterialCommunityIcons
          name="bookmark-multiple-outline"
          size={22}
          color="black"
        />
      ) : (
        <MaterialCommunityIcons
          name="bookmark-multiple-outline"
          size={22}
          color="grey"
        />
      );
    }
    if (title === 'Setting') {
      return active ? (
        <AntDesign name="setting" size={22} color="black" />
      ) : (
        <AntDesign name="setting" size={22} color="grey" />
      );
    }
    return <AntDesign name="setting" size={22} color="black" />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
