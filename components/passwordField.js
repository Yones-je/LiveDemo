import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const passwordField = (props) => {
  const [showPassword, setshowPassword] = useState(true);

  return (
    <View style={{marginTop: 10}}>
      <TextInput
        style={{
          marginVertical: 5,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 1,
          height: 40,
          color: COLORS.white,
          ...FONTS.body3,
        }}
        placeholder="Lösenord"
        placeholderTextColor={COLORS.black}
        selectionColor={COLORS.white}
        secureTextEntry={showPassword}
        onChangeText={props.handleCallback}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          bottom: 10,
          height: 30,
          width: 30,
        }}
        onPress={() => setshowPassword(!showPassword)}>
        <Icon
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default passwordField;
