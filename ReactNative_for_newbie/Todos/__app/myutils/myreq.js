import AsyncStorage from '@react-native-async-storage/async-storage'

function getUrl() {
    return AsyncStorage.getItem('server')
    .then( string => { return JSON.parse(string) })
    .then( json => { return json.url })
}

export async function gettodos(token, username) {
    return fetch(await getUrl() + '/todos',  {
        method: 'GET',
        headers: {
            'token': token,
            'username': username
        }
    })
}

export async function postlogin(password, username) {
    return fetch(await getUrl() + '/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
    })
}



