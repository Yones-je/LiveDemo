import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// My imports
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {RenderLogo, PasswordField, RenderButton} from '../components';

const Start = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lightGreen, COLORS.lightGray]}
        style={{flex: 1}}>
        <View style={{marginTop: 20}}>
          <RenderLogo />
          <View style={{marginTop: 50, marginHorizontal: 10, marginBottom: 5}}>
            <TextInput
              style={{
                marginVertical: 5,
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.black,
                ...FONTS.body3,
              }}
              placeholder="Användarnamn"
              placeholderTextColor={COLORS.black}
              selectionColor={COLORS.white}
            />
            <PasswordField />
          </View>
          <RenderButton
            lable="Logga in"
            onPress={() => navigation.navigate('Home')}
          />
          <TouchableOpacity
            style={{marginHorizontal: 15}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.purple, ...FONTS.body4}}>
              Har du inget konto än? Tryck här för att gå med!{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Start;
