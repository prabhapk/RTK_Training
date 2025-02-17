import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
// import { TextInput, Button, Text } from 'react-native-paper';
import { SearchUser, setUsername } from '../redux/features/LoginSlice';

const LoginScreen = ({ navigation }:any) => {

const dispatch = useDispatch<AppDispatch>();
const userName = useSelector((state: RootState) => state.login.userName)

  const [error, setError] = useState('');

  const handleInputChange = (text:string) => {
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(text)) {
      dispatch( setUsername(text))
      setError('');
    } else {
      setError('Only letters are allowed.');
    }
  };
  // const handleLogin = async () => {
  //   dispatch(SearchUser())
  //   navigation.navigate("Home")
  // };
  const handleLogin=()=>{
  navigation.navigate("detailsPage")
  }
  return (
    <View style={styles.container}>
      {/* <Text variant="headlineLarge" style={styles.label}>
        Login
      </Text>
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={handleInputChange}
        style={styles.input}
        error={!!error}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Submit
      </Button> */}
      <TextInput 
      value={userName}
      onChangeText={handleInputChange}
      placeholder="Enter your username"
      style={styles.input}
      />

<Button  onPress={handleLogin} 
       title="Submit"
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderColor:"#000",
    borderRadius:10,
    borderWidth:1,
    padding:10
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});
export default LoginScreen;