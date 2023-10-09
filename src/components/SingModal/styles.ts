import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
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
  SingInputFlatList: {
    width: '100%',
  },
  singUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },

  singUpButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 20,
  },
  difficultyLevelContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  difficultyLevelText: {
    fontSize: 18,
    fontFamily: 'poppins-light',
  },
  levelBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,

  },
  levelBar: {
    width: '100%',

    height: 20,
    borderRadius: 10,
    backgroundColor: '#D98639',
  },
});

export default styles;
