import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  activeTabItem: {
    backgroundColor: 'blue',
  },
  tabText: {
    fontFamily: 'poppins-regular',
    fontSize: 18,
  },
  activeTabText: {
    color: 'white',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 3,
    width: '100%',
    alignSelf: 'center',
    height: 4,
    borderRadius: 10,
  },
});

export default styles;
