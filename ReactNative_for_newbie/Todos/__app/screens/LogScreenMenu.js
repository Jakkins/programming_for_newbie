import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import {logScreenCSS} from '../styles/global'

function LogScreenMenu({navigation}) {
        return (
        <View style={logScreenCSS.view}>
            <TouchableOpacity
            style={logScreenCSS.button}
            onPress={() => navigation.navigate('SignUp')} >
                <Text style={logScreenCSS.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={logScreenCSS.button}
            onPress={() => navigation.navigate('LogIn')} >
                <Text style={logScreenCSS.text}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogScreenMenu
