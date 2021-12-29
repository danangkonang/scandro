import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
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
            iconName = focused ? 'bubbles' : 'bubbles';
          } else if (route.name === 'Write') {
            iconName = focused ? 'grid' : 'grid';
          } else {
            iconName = focused ? 'grid' : 'grid';
          }
          return <SimpleIcon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Write" component={Write} />
      <Tab.Screen name="Read" component={Read} />
    </Tab.Navigator>
  );
}
