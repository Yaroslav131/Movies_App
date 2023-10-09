import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  seatButton: {
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: 5,
  },
  seatButtonText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
});
