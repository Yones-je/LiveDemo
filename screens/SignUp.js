import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// My imports
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {RenderButton, RenderLogo} from '../components';

const signUp = ({navigation}) => {
  const [showPassword, setshowPassword] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
        onPress={() => navigation.navigate('Start')}>
        <Icon name="arrow-back" size={24} color={COLORS.gray} />
        <Text
          style={{marginLeft: SIZES.padding, color: COLORS.gray, ...FONTS.h4}}>
          Tillbaka till Start
        </Text>
      </TouchableOpacity>
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3, // 30
          marginHorizontal: SIZES.padding * 3,
        }}>
        {/* Full Name */}
        <View style={{marginTop: 30}}>
          <Text style={{color: COLORS.purple, ...FONTS.body3}}>
            Användarnamn
          </Text>
          <TextInput
            style={{
              marginVertical: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Skriv ditt namn här"
            placeholderTextColor={COLORS.lightGreen}
            selectionColor={COLORS.white}
            onChangeText={(username) => setEnteredUsername(username)}
          />
        </View>

        {/* Phone Number */}
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: COLORS.purple,
              ...FONTS.body3,
              flexDirection: 'row',
            }}>
            Mobiltelefon
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* Country Code */}

            <TouchableOpacity
              style={{
                width: 100,
                height: 45,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2,
              }}
              onPress={() => console.log('Pressed')}>
              <View style={{justifyContent: 'center'}}>
                <Icon name="caret-down" color={COLORS.white} size={15} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Image
                  source={icons.sweFlag}
                  resizeMode="contain"
                  style={{width: 24, height: 24}}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Text style={{color: COLORS.white, ...FONTS.body3}}>+46</Text>
              </View>
            </TouchableOpacity>

            {/* Phone number */}
            <TextInput
              keyboardType="number-pad"
              style={{
                marginVertical: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder="Skriv ditt telefonnummer här"
              placeholderTextColor={COLORS.lightGreen}
              selectionColor={COLORS.white}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{marginTop: 10}}>
          <Text style={{color: COLORS.purple, ...FONTS.body3}}>Lösenord</Text>
          <TextInput
            style={{
              marginVertical: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Skriv ditt lösenord här"
            placeholderTextColor={COLORS.lightGreen}
            selectionColor={COLORS.white}
            secureTextEntry={showPassword}
            onChangeText={(password) => setEnteredPassword(password)}
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
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lightGreen, COLORS.emerald]}
        style={{flex: 1}}>
        <ScrollView>
          {renderHeader()}
          <RenderLogo />
          {renderForm()}
          <RenderButton
            lable="Fortsätt"
            onPress={() => {
              auth()
                .createUserWithEmailAndPassword(
                  enteredUsername,
                  enteredPassword,
                )
                .then(() => {
                  console.log('User account created & signed in!');
                })
                .catch((error) => {
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }

                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }

                  console.error(error);
                });
              navigation.navigate('Home');
            }}
          />
          <View
            style={{
              marginHorizontal: 50,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
              }}>
              eller
            </Text>
            <View style={{marginTop: 10}}>
              <Icon.Button
                name="logo-facebook"
                backgroundColor="#3b5998"
                onPress={() => console.log('FB Register')}>
                Registrera med facebook
              </Icon.Button>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default signUp;
