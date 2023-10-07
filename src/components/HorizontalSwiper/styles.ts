import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
  },
  focusedContainer: {
  },
  smallContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  flatListContainer: {
    width: '100%',
    height: '80%',
  },
  flatList: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  topicsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  topics: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: 1,
    paddingHorizontal: 3,
  },
  topicsText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
});

export default styles;
