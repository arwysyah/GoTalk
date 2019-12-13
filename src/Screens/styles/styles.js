import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFF',
    marginTop: 2,
    marginBottom: 120,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: 'green',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginHorizontal: 30,
  },
  inputTitle: {
    color: 'grey',
    fontSize: 15,
  },
  login: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
  
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: 300,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'green',
    borderRadius: 8,
    height: 42,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    fontSize:15,
    
    left:-8,
    color:"green",
    fontWeight:'bold'}
  
});

export default styles;
