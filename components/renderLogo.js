import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';

export default function renderLogo() {
  return (
    <View
      style={{
        marginVertical: SIZES.padding * 2,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={images.liveLogo}
        resizeMode="center"
        style={{
          width: '50%',
        }}
      />
    </View>
  );
}
