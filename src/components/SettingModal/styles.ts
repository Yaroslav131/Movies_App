import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    elevation: 5,
    borderRadius: 15,
    paddingTop: 40,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'poppins-regular',
    fontSize: 22,
  },
  cancelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 30,
  },
  switchContainer: {
    gap: 3,
    flexDirection: 'row',
    marginLeft: 30,
  },
  switchText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    marginTop: 3,
  },
  dropdown: {
    marginTop: 15,
    marginLeft: 30,
    width: '70%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  placeholderStyle: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },

});

export default styles;
