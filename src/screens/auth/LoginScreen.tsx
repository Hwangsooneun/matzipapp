import React, {useRef} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import InputField from '@/components/inputField';
import CustomButton from '@/components/CustomButton';
import useForm from '@/hooks/useForm';
import {validateLogin} from '@/utils';
import useAuth from '@/hooks/queries/useAuth';

function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const {loginMutation} = useAuth();
  const login = useForm({
    initialValues: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          returnKeyType="join"
          blurOnSubmit={false}
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
