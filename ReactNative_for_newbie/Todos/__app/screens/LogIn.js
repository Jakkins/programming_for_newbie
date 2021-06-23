import React, {useState} from 'react';
import {TouchableOpacity, Text, TextInput, View, Alert} from 'react-native';
import {LogInCSS, PasswordTextInput} from '../styles/global';
import * as Keychain from 'react-native-keychain';
import {postlogin} from '../myutils/myreq'

export default function LogIn({isSignedIn, setSigned, navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  return (
    <View style={LogInCSS.view}>
      <TextInput
        style={LogInCSS.textInput}
        placeholder="username"
        placeholderTextColor="#FFF"
        onChangeText={(username) => setUsername(username)}
      />
      <PasswordTextInput
        style={LogInCSS.textInput}
        placeholderTextColor="#FFF"
        onChangeText={(password) => setPass(password)}
      />
      <TouchableOpacity
        style={LogInCSS.button}
        onPress={() =>
          sendLogInAsync(isSignedIn, setSigned, username, password)
        }>
        <Text style={LogInCSS.text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

// isSignedIn, setSigned = setSigned(true) = works
async function sendLogInAsync(isSignedIn, setSigned, username, password) {
  if (username === '') return Alert.alert('username can\t be empty');
  if (password === '') return Alert.alert('password can\t be empty');
  try {
    let str = await postlogin(password, username)
    let json = await str.json()
    if (json.message === 'logged') {
      await Keychain.setGenericPassword(
        username,
        json.token,
      ).then(function () {
        console.log('Credentials saved successfully!');
        setSigned(true)
      })
    }
  }
  catch (e) { console.log(e) }
}


/*
  try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log( 'Credentials successfully loaded for user ' + credentials.username);
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
*/