import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';

import {mapNavigations} from '@/constants';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

function AddPostScreen({route}: AddPostScreenProps) {
  const {location} = route.params;
  return (
    <View>
      <Text>{location.latitude}</Text>
      <Text>{location.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AddPostScreen;
