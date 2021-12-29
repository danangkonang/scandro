/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUrl} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
let {height} = Dimensions.get('window');

const App = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    url: '',
  });

  const saveUrl = async () => {
    await AsyncStorage.setItem('URL', state.url);
    dispatch(setUrl(state.url));
  };

  return (
    <ScrollView style={{height: height, backgroundColor: '#fff'}}>
      <View style={style.wrapperTitle}>
        <Text style={style.textTitle}>Daftarkan Url Sekarnag</Text>
      </View>
      <View
        style={{
          height: height / 2 - 25,
          paddingHorizontal: 15,
          justifyContent: 'center',
        }}>
        <View>
          <View style={{marginHorizontal: 20, marginBottom: 10}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1.5,
                borderColor: 'rgba(0,0,0,.3)',
                borderRadius: 5,
                marginBottom: 3,
              }}>
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  color: 'black',
                  flex: 1,
                }}
                value={state.url}
                onChangeText={(v) => {
                  setState({
                    ...setState,
                    url: v,
                  });
                }}
                placeholderTextColor={'rgba(0,0,0,.3)'}
                placeholder={'http://example.com'}
                keyboardType={'default'}
              />
            </View>
          </View>

          <TouchableOpacity
            style={style.button}
            onPress={saveUrl}
            activeOpacity={0.8}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Simpan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: height / 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center', paddingBottom: 25}}>
          <Text style={[style.text, {color: 'rgba(0,0,0,0.5)'}]}>
            danangkonang
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  wrapperTitle: {
    flex: 1,
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'tomato',
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
  },
  textLink: {
    paddingLeft: 5,
    color: 'tomato',
  },

  button: {
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'tomato',
  },
});

export default App;
