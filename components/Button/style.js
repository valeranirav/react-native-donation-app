import { StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(40),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter18pt',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;