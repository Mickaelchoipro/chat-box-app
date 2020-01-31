import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYlavgaaQGAm3rHtG739MzIkwgPqyc6aA",
    authDomain: "chat-bax-app.firebaseapp.com",
    databaseURL: "https://chat-bax-app.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export  {firebaseApp}

export default base