import { StyleSheet} from 'react-native';
import { verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  margitBottom24: {
    marginBottom: verticalScale(24)
  }
});

export default globalStyle;