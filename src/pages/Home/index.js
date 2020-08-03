import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILProfile} from '../../assets';
import {Gap} from '../../components/atom';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderStatusBar />
        <RenderHeader />
        <RenderBanners />
        <RenderHotTopics />
        <RenderLatestNews />
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
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image source={ILProfile} style={styles.avatar} />
          <View style={styles.star}>
            <Ionicons
              name="ios-star"
              size={15}
              color={colors.icon.quaternary}
            />
          </View>
        </View>
        <View>
          <Text style={styles.name}>Yosada Dede</Text>
          <Text style={styles.status}>Premium User</Text>
        </View>
      </View>
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

const RenderBanners = () => {
  const [banners] = useState([
    {
      id: 1,
      title: 'Politik',
      desc: '',
      img: 'red',
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
  console.log(banners);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={banners}
      keyExtractor={(banner, index) => banner + index.toString()}
      contentContainerStyle={styles.banner}
      renderItem={banner => {
        return (
          <TouchableOpacity style={styles.bannerItem}>
            <View style={styles.label}>
              <Text style={styles.title}>Politik</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const RenderHotTopics = () => {
  const [topics] = useState([
    {
      id: 1,
      title: 'Politik',
      desc: '',
      img: 'red',
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
    <View style={styles.topic}>
      <Text style={styles.titleTopic}>Hot Topics</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topics}
        keyExtractor={(topic, index) => topic + index.toString()}
        renderItem={topic => {
          return (
            <TouchableOpacity style={styles.topicItem}>
              <View style={styles.label}>
                <Text style={styles.title}>Creative</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const RenderLatestNews = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Politik',
      desc: '',
      img: 'red',
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
    <View style={styles.latestNews}>
      <Text style={styles.titleTopic}>Latest News</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={item => {
          return (
            <TouchableOpacity style={styles.newsItem}>
              <View source={null} style={styles.thumbnail} />
              <View>
                <View style={styles.label}>
                  <Text style={styles.title}>Creative</Text>
                </View>
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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.background.secondary,
    marginRight: 15,
  },
  star: {
    position: 'absolute',
    top: 0,
    right: -5,
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.primary[800],
    color: colors.text.primary,
  },
  status: {
    fontSize: 12,
    fontFamily: fonts.primary[800],
    color: colors.text.quinary,
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
    fontSize: 12,
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
});
