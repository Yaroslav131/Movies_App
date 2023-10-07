import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 3,
    justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: 'poppins-bold',
    fontSize: 22,
  },
  idText: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
  },
  settingButtons: {
    width: '70%',
    alignSelf: 'center',
  },
  menuButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 15,
    borderRadius: 12,
  },
  menuButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 18,
  },
  themeButtonsContainer: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 15,
  },
  themeButtonLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  themeButtonRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  themeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  themeButtonText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  logoImage: {
    alignSelf: 'center',
  },
});

export default styles;
