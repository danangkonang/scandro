import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Read from '../pages/Read';
import Write from '../pages/Write';
const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <React.Fragment>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Read') {
              iconName = focused ? 'bubbles' : 'bubbles';
            }  else if (route.name === 'Write') {
              iconName = focused ? 'grid' : 'grid';
            } else {
              iconName = focused ? 'grid' : 'grid';
            }
            return <SimpleIcon name={iconName} size={size} color={color} />;
          }
        })}>
          <Tab.Screen name="Read" component={Read} />
          <Tab.Screen name="Write" component={Write} />
        </Tab.Navigator>
      </React.Fragment>
    </NavigationContainer>
  );
}
