import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILProfile} from '../../assets';
import {Gap} from '../../components/atom';

const Home = () => {
  return (
    <View style={styles.page}>
      <RenderStatusBar />
      <RenderHeader />
    </View>
  );
};

const RenderStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.background.primary}
      hidden={false}
    />
  );
};

const RenderHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image source={ILProfile} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.name}>Sobuj</Text>
          <Text style={styles.status}>Premium User</Text>
        </View>
      </View>
      <View style={styles.rightIcon}>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={22} color={colors.icon.tertiary} />
        </TouchableOpacity>
        <Gap width={20} />
        <TouchableOpacity>
          <Feather
            name="more-vertical"
            size={22}
            color={colors.icon.tertiary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.background.secondary,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  status: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.quinary,
  },
  rightIcon: {
    flexDirection: 'row',
  },
});
