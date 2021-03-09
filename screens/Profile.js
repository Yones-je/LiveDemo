import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {RenderButton} from '../components';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const Profile = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lightGreen, COLORS.emerald]}
        style={{flex: 1}}>
        <View>
          <Text>Hej!</Text>
        </View>
        <RenderButton
          lable="Logga ut"
          onPress={() => {
            auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          }}
        />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Profile;
