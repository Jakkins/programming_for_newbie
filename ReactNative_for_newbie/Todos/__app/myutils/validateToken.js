/*
    NON MI SERVE QUESTO MODULO
*/

import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function validateToken(username, token) {
    console.log("=====================")
    console.log('Validate token')
    console.log()
    
    let string = await AsyncStorage.getItem('server')
    let serverJson = JSON.parse(string)

    try {
        let response = await fetch( serverJson.url + '/todos', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Token': token,
                'Username': username
            }
        })
        let res = await response.json()
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}