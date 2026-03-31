import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Input = (
  { label, placeholder, onChangeText = () => {}, keyboardType = 'default' },
  secureText = false,
) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.input}
        placeholder={placeholder && placeholder}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        onChangeText={value => {
          setValue(value);
          onChangeText(value);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureText: PropTypes.bool,
};

export default Input;
