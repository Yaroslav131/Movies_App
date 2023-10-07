import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    resizeMode: 'cover',
  },
  singContainer: {
    width: '80%',
  },
  singUpFlatList: {
    width: '100%',
  },
  welcomText: {
    fontSize: 32,
    width: '70%',
    fontFamily: 'inriaSans-lightItalic',
  },
  alreadyAccText: {
    fontFamily: 'inter-regular',
    fontSize: 15,
    fontStyle: 'italic',
  },
  loginText: {
    textDecorationLine: 'underline',
  },

  sponsoresContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  versionText: {
    fontFamily: 'inter-light',
    fontSize: 15,
  },
  mainContant: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 5,
  },
  footer: {
    flex: 1,
    width: '100%',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
