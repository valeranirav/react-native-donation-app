import React from 'react';

import PropTypes from 'prop-types';
import { Pressable, Text } from 'react-native';
import style from './style';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.buttonDisabled]}
      onPress={() => props.onPress()}
    >
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
}
Button.default = {
  title: '',
  isDisabled: false,
  onPress: () => {},
}

Button.PropTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
}

export default Button;