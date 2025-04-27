import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, View, SafeAreaView} from 'react-native';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

export default AuthHomeScreen;
