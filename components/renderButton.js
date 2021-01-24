import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const renderButton = (props) => {
  return (
    <View style={{marginHorizontal: 50, marginTop: 20, marginBottom: 10}}>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: COLORS.purple,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={props.onPress}>
        <Text style={{color: COLORS.lightGreen, ...FONTS.h3}}>
          {props.lable}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default renderButton;
