import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  buyTicktButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    right: 30,
    gap: 2,
    zIndex: 15,
  },
  ticketImage: {
    resizeMode: 'cover',
    marginTop: 1,
  },
  buyTicktText: {
    fontSize: 14,
    fontFamily: 'poppins-light',
    color: '#FFF',
  },
  topButtons: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
    zIndex: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'poppins-regular',
    color: '#FFF',
  },
  shareButton: {

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
