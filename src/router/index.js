import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setUrl} from '../redux/action';
import Loading from '../pages/Loading';
import Setting from '../pages/Setting';
import BottomBar from './BottomBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Router() {
  const dispatch = useDispatch();
  const {reducer} = useSelector((val) => val);
  const [state, setState] = React.useState({
    isLoading: true,
    url: '',
  });

  React.useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('URL');
      if (value !== null) {
        dispatch(setUrl(value));
      }
      setState({
        ...state,
        isLoading: false,
      });
    } catch (e) {
      // error reading value
    }
  };

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {reducer.url === '' ? (
          <React.Fragment>
            <Stack.Screen name="Setting" component={Setting} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen name="BottomBar" component={BottomBar} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
