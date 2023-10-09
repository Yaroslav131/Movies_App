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
    fontFamily: 'poppins-light',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default styles;
