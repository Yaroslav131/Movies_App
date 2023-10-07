import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
  },
});
