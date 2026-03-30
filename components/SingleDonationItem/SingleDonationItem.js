import React from 'react';

import PropTypes from 'prop-types';
import { Image, Pressable, View } from 'react-native';

import style from './style';
import Badge from '../Badge/Badge';
import Header from "../Header/Header";

const SingleDonationItem = (props) => {
  return (
    <Pressable onPress={() => {props.onPress(props.donationItemId);}}>
      <View>
        <View>
          <View style={style.badgeContainer}>
            <Badge title={props.badgeTitle} />
          </View>
          <Image
            resizeMode={'cover'}
            source={{ uri: props.uri }}
            style={style.image}
          />
        </View>
        <View style={style.donationInformation}>
          <Header title={props.donationTitle} type={3} color={'#0A043C'} numberOfLines={1} />
          <View style={style.priceContainer}>
            <Header
              title={'$' + props.price.toFixed(2)}
              type={3}
              color={'#156CF7'}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

SingleDonationItem.PropTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SingleDonationItem;