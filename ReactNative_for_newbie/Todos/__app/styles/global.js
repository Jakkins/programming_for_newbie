import React from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'

export const PasswordTextInput = (props) => {
  return (
    <TextInput
    placeholder='password'
    {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
    maxLength={30}
    secureTextEntry
    />
  )
}

export const AppCSS = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40
  }
})

export const logScreenCSS = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginBottom: 15,
    width: '90%',
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    borderWidth:2,
    borderColor: '#BF360C',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
})

export const LogInCSS = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textInput: {
    padding: 8,
    marginBottom: 15,
    fontSize: 18,
    width: '90%',
    textAlign: 'center', // placeholder alignment
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    color: 'white',
    borderWidth: 2,
    borderColor: '#BF360C',
    borderRadius: 8,
  },
  button:{
    padding: 10,
    marginBottom: 15,
    width: '30%',
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    borderWidth: 2,
    borderColor: '#BF360C',
    borderRadius: 1,
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
})
