import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  errorContainer: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: 'poppins-regular',
    textAlign: 'center',
    fontSize: 24,
  },
});
