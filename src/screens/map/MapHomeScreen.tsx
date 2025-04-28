import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import useAuth from '../../hooks/queries/useAuth';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView>
      <View>
        <Text>맵 스크린</Text>
        <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} />
      </View>
    </SafeAreaView>
  );
}

export default MapHomeScreen;
