import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 30,
  },

  header: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'poppins-regular',
    fontSize: 24,

  },
  headerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  logoImage: {
    marginTop: 20,
  },
  itemContainer: {
    marginVertical: 15,
    width: '100%',
  },
  titleText: {
    fontFamily: 'poppins-regular',
    fontSize: 22,
    width: '100%',
    textAlign: 'left',
  },
  dropdown: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  resetButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  resetButtonText: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
  },
});
