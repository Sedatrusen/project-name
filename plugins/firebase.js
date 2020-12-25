import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBNCRSrBlVsCJcfm9cLHczfY3X4tlCzcH4',
  authDomain: 'blizzardshop-c1285.firebaseapp.com',
  projectId: 'blizzardshop-c1285',
  storageBucket: 'blizzardshop-c1285.appspot.com',
  messagingSenderId: '902790478180',
  appId: '1:902790478180:web:8a9a82e0a5223734eb6271',
  measurementId: 'G-Q4W5KDWSM7',
}
let app = null
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}
//! firebase.apps.length ?  : ''

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
