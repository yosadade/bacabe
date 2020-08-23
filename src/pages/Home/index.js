import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../utils';
import {Gap, Label} from '../../components/atom';
import {HomeProfile} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderStatusBar />
        <RenderHeader />
        <RenderBanners navigation={navigation} />
        <RenderHotTopics navigation={navigation} />
        <RenderLatestNews navigation={navigation} />
      </ScrollView>
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
      <HomeProfile />
      <View style={styles.rightIcon}>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={24} color={colors.icon.tertiary} />
        </TouchableOpacity>
        <Gap width={20} />
        <TouchableOpacity>
          <MaterialIcons
            name="notifications-none"
            size={24}
            color={colors.icon.tertiary}
          />
          <View style={styles.notifications} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderBanners = ({navigation}) => {
  const [banners] = useState([
    {
      id: 1,
      title: 'Politik',
      img: 'red',
      desc: '',
    },
    {
      id: 2,
      title: 'Olahraga',
      desc: '',
      img: 'yellow',
    },
    {
      id: 3,
      title: 'Ekonomi',
      desc: '',
      img: 'cyan',
    },
    {
      id: 4,
      title: 'Kesehatan',
      desc: '',
      img: 'green',
    },
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={banners}
      keyExtractor={(banner, index) => banner + index.toString()}
      contentContainerStyle={styles.banner}
      renderItem={banner => {
        console.log(banner.item);
        return (
          <TouchableOpacity
            style={styles.bannerItem}
            onPress={() => navigation.navigate('Banner')}>
            <View style={[styles.label, {backgroundColor: banner.item.img}]}>
              <Text style={styles.title}>{banner.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const RenderHotTopics = ({navigation}) => {
  const [topics] = useState([
    {
      id: 1,
      title: 'POLITIK',
      desc: '',
      label: '#e74c3c',
    },
    {
      id: 2,
      title: 'SPORT',
      desc: '',
      label: '#2ecc71',
    },
    {
      id: 3,
      title: 'EKONOMI',
      desc: '',
      label: '#2980b9',
    },
    {
      id: 4,
      title: 'HEALT',
      desc: '',
      label: '#f1c40f',
    },
    {
      id: 4,
      title: 'TRAVEL',
      desc: '',
      label: '#e67e22',
    },
    {
      id: 4,
      title: 'FOOD',
      desc: '',
      label: '#f1c40f',
    },
  ]);
  return (
    <View style={styles.topic}>
      <Text style={styles.titleTopic}>Hot Topics</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topics}
        keyExtractor={(topic, index) => topic + index.toString()}
        renderItem={topic => {
          return (
            <TouchableOpacity
              style={styles.topicItem}
              onPress={() => navigation.navigate('HotTopic')}>
              <Label
                title={topic.item.title}
                backgroundColor={colors.background.primary}
                color={topic.item.label}
                marginLeft={10}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const RenderLatestNews = ({navigation}) => {
  const [news] = useState([
    {
      id: 1,
      uri:
        'https://cdn2.tstatic.net/tribunnews/foto/bank/images/mantan-panglima-tni_20180525_202358.jpg',
      title: 'POLITIK',
      desc:
        'Gatot Nurmantyo Akan Keluar dari KAMI Jika Berubah Jadi Partai Politik',
      label: '#e74c3c',
    },
    {
      id: 2,
      uri:
        'https://img.okezone.com/content/2020/08/23/261/2265976/limpahan-hadiah-uang-menanti-juara-liga-champions-2019-2020-4msoHkVUu6.jpg',
      title: 'SPORT',
      desc: 'Limpahan Hadiah Uang Menanti Juara Liga Champions 2019-2020',
      label: '#2ecc71',
    },
    {
      id: 3,
      uri:
        'https://akcdn.detik.net.id/visual/2020/08/14/nambah-lagi-negara-resesi-malaysia_169.jpeg?w=715&q=90',
      title: 'EKONOMI',
      desc: '4 Negara Tetangga yang Masuk Jurang Resesi',
      label: '#2980b9',
    },
    {
      id: 4,
      uri:
        'https://cdn1-production-images-kly.akamaized.net/-35VaJE7UGxAPYg2bvDU3alMleA=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3161004/original/046601300_1592975253-20200624-Penyemprotan-Disinfektan-di-Pasar-Anyar-Jakarta-2.jpg',
      title: 'HEALT',
      desc: 'Kenapa Kasus COVID-19 di Indonesia Tak Kunjung Melandai?',
      label: '#f1c40f',
    },
    {
      id: 5,
      uri:
        'https://cdn2.tstatic.net/travel/foto/bank/images/heha-sky-view-kembali-melayani-pengunjung.jpg',
      title: 'TRAVEL',
      desc: 'Fasilitas dan Harga Tiket Masuk Heha Sky View',
      label: '#e67e22',
    },
    {
      id: 6,
      uri:
        'https://petualang.travelingyuk.com//uploads/2018/08/Kuah-mie-yang-bikin-ngiler.jpg',
      title: 'FOOD',
      desc:
        'Mie Ayam Bu Tumini, Kuliner Jogja dengan Porsi Jumbo dan Kuah Melimpah',
      label: '#f1c40f',
    },
  ]);
  return (
    <View style={styles.latestNews}>
      <Text style={styles.titleTopic}>Latest News</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={item => {
          console.log(item.item.uri);
          return (
            <TouchableOpacity
              style={styles.newsItem}
              onPress={() => navigation.navigate('LatestNews')}>
              <View style={styles.thumbnail}>
                <Image source={{uri: item.item.uri}} style={styles.thumbnail} />
                <View style={styles.overlay} />
              </View>
              <View style={styles.wrapperDesc}>
                <Label
                  backgroundColor="#343641"
                  title={item.item.title}
                  color={item.item.label}
                />
                <Text numberOfLines={2} style={styles.title}>
                  {item.item.desc}
                </Text>
              </View>
              <TouchableOpacity style={styles.newsItemIcon}>
                <MaterialCommunityIcons
                  name="bookmark-multiple-outline"
                  size={13}
                  color={colors.icon.tertiary}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20rem',
    paddingBottom: '40rem',
  },

  rightIcon: {
    flexDirection: 'row',
  },
  notifications: {
    position: 'absolute',
    top: 1,
    right: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
    backgroundColor: colors.background.quaternary,
  },
  banner: {
    paddingHorizontal: '20rem',
    paddingBottom: '20rem',
  },
  bannerItem: {
    width: '200rem',
    height: '150rem',
    borderRadius: '10rem',
    backgroundColor: colors.background.secondary,
    marginRight: '10rem',
  },
  label: {
    height: '20rem',
    width: '60rem',
    marginHorizontal: '10rem',
    marginVertical: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5rem',
    backgroundColor: colors.background.quaternary,
  },
  title: {
    fontSize: '9rem',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  topic: {
    paddingLeft: '20rem',
    paddingBottom: '20rem',
  },
  titleTopic: {
    fontSize: '20rem',
    color: colors.text.primary,
    fontFamily: fonts.primary[800],
    paddingBottom: '10rem',
  },
  topicItem: {
    height: '150rem',
    width: '105rem',
    borderRadius: '10rem',
    backgroundColor: colors.background.secondary,
    marginRight: '10rem',
  },
  latestNews: {
    paddingHorizontal: '20rem',
  },
  newsItem: {
    padding: '10rem',
    borderRadius: '10rem',
    marginBottom: '10rem',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.background.secondary,
  },
  newsItemIcon: {
    marginLeft: 'auto',
  },
  thumbnail: {
    width: '70rem',
    height: '70rem',
    borderRadius: '10rem',
    backgroundColor: colors.background.primary,
    marginRight: '10rem',
  },
  overlay: {
    position: 'absolute',
    width: '70rem',
    height: '70rem',
    borderRadius: '10rem',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: '10rem',
  },
  wrapperDesc: {
    alignSelf: 'flex-start',
    paddingRight: 90,
  },
});
