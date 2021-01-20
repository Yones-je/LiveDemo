import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Home, Live} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {icons, COLORS, FONTS} from '../constants/index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.white,
        labelStyle: {
          ...FONTS.body4,
        },
        style: {
          backgroundColor: COLORS.transparent,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={24}
              color={focused ? COLORS.white : COLORS.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.streaming}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.white : COLORS.red,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="person-outline"
              size={24}
              color={focused ? COLORS.white : COLORS.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
