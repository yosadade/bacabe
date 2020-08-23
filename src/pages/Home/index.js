import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
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
    <View style={styles.latestNews}>
      <Text style={styles.titleTopic}>Latest News</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.newsItem}
              onPress={() => navigation.navigate('LatestNews')}>
              <View source={null} style={styles.thumbnail} />
              <View style={styles.wrapperDesc}>
                <Label
                  backgroundColor="#343641"
                  title={item.item.title}
                  color={item.item.label}
                />
                <Text style={styles.title}>
                  Design for people of modern era
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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
    paddingBottom: 40,
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
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.background.quaternary,
  },
  banner: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bannerItem: {
    width: 200,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.background.secondary,
    marginRight: 10,
  },
  label: {
    height: 20,
    width: 60,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.background.quaternary,
  },
  title: {
    fontSize: 10,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  topic: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  titleTopic: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[800],
    paddingBottom: 10,
  },
  topicItem: {
    height: 150,
    width: 105,
    borderRadius: 10,
    backgroundColor: colors.background.secondary,
    marginRight: 10,
  },
  latestNews: {
    paddingHorizontal: 20,
  },
  newsItem: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.background.secondary,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.background.primary,
    marginRight: 10,
  },
  wrapperDesc: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
