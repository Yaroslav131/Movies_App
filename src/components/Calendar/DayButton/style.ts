import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  calendar: {
    maxWidth: '80%',
    minWidth: '80%',
    alignSelf: 'center',
  },

  monthText: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    marginTop: 2,
  },
  dateContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
