import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282626',
    padding: 24,
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6c6c6c',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#4c4b54',
    borderRadius: 5,
    marginRight: 12,
    color: '#c2c0c0',
    padding: 16,

    fontSize: 16,
  },

  buttonText: {
    color: '#191919',
    fontSize: 20,
    textAlign: 'center',
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: '#d6fe34',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
});
