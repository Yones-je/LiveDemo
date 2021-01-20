import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// My imports
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {featuresData} from '../data/dummydata';

const FeaturedList = (props) => {
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={{marginVertical: SIZES.base, width: SIZES.width / 6}}
        onPress={() => console.log(item.name)}>
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.transparent,
          }}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              left: 29,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Icon name="eye" size={10} color={COLORS.red} />
            <Text style={{...FONTS.body5, color: COLORS.white}}>
              {item.viewers}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray,
          margin: 10,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text style={{...FONTS.h4, color: COLORS.black}}>
          #{props.category}
        </Text>
        <Image
          source={props.icon1}
          style={{marginHorizontal: 3, height: 18, width: 18}}
        />
        <Image
          source={props.icon2}
          style={{marginHorizontal: 3, height: 18, width: 18}}
        />
      </View>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 30}}
        numColumns={5}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={featuresData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeaturedList;
