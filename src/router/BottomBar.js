import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Read from '../pages/Read';
import Write from '../pages/Write';
const Tab = createBottomTabNavigator();

export default function RouterTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Read') {
            iconName = focused ? 'scan1' : 'scan1';
          } else if (route.name === 'Write') {
            iconName = focused ? 'edit' : 'edit';
          } else {
            iconName = focused ? 'edit' : 'edit';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Write" component={Write} />
      <Tab.Screen name="Read" component={Read} />
    </Tab.Navigator>
  );
}
