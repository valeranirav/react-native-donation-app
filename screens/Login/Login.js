import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { Pressable, ScrollView, View } from 'react-native';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.margitBottom24}>
          <Header title="Welcome Back" />
        </View>
        <View style={globalStyle.margitBottom24}>
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
          />
        </View>

        <View style={globalStyle.margitBottom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            secureText={true}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.margitBottom24}>
          <Button title="Login" onPress={() => {}} />
        </View>
        <Pressable style={style.registrationButton}>
          <Header title="Don’t have an account?" color={'#156CF7'} type={3} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
