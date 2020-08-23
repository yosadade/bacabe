import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Header, Button, Link, Gap} from '../../components';
import {ILMe} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={() => navigation.navigate('Register')}>
            <Image source={ILMe} style={styles.avatar} />
          </TouchableOpacity>
          <Text style={styles.name}>Yosada Dede</Text>
          <Text style={styles.profession}>Yogyakarta, Indonesia</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            type="secondary"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={20} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            color={colors.text.septenary}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    paddingHorizontal: '40rem',
    paddingBottom: '64rem',
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: '26rem',
  },
  avatar: {
    width: '115rem',
    height: '115rem',
    borderRadius: '115rem',
  },
  avatarWrapper: {
    width: '130rem',
    height: '130rem',
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: '130rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10rem',
  },
  addPhoto: {
    position: 'absolute',
    bottom: '8rem',
    right: '6rem',
  },
  name: {
    fontSize: '24rem',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    marginTop: '10rem',
  },
  profession: {
    fontSize: '18rem',
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.septenary,
    marginTop: '4rem',
  },
});
