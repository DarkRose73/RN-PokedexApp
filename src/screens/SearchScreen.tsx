import {View, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />
    </View>
  );
};
