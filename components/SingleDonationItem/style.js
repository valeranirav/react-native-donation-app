import { StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    marginTop: verticalScale(13),
    marginLeft: horizontalScale(10),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  priceContainer: {
    marginTop: verticalScale(5),
  }
});

export default style;