import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { ScrollView, View } from 'react-native';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()}></BackButton>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.margitBottom24}>
          <Header title="Hello and Welcome" />
        </View>
        <View style={globalStyle.margitBottom24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your first and last name'}
            onChangeText={value => setEmail(value)}
          />
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
          <Button title="Register" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
