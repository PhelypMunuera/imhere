import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    backgroundColor: '#4c4b548e',
    marginBottom: 10,

    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },

  textContainer: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },

  buttonText: {
    color: '#191919',
    fontSize: 20,
    textAlign: 'center',
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: '#a43232',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
