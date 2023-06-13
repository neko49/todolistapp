import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countryPickerContainer: {
    //flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryPickerLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  countryPicker: {
    flex: 1,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
  },
  newsItem: {
    marginBottom: 20,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});
