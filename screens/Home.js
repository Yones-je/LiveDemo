import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// My imports
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {featuresData} from '../data/dummydata';
import FeaturedList from '../components/featuredList';
import RenderLogo from '../components/renderLogo';

const Home = () => {
  const [featured, setFeatured] = React.useState(featuresData);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lightGreen, COLORS.lightGray]}
        style={{flex: 1}}>
        <RenderLogo />
        <FeaturedList category="Mode" icon1={icons.dress} icon2={icons.shirt} />
        <FeaturedList
          category="Inredning"
          icon1={icons.bookshelf}
          icon2={icons.carpet}
        />
        <FeaturedList
          category="Elektronik"
          icon1={icons.camera}
          icon2={icons.desktop}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
