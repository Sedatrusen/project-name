import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBNCRSrBlVsCJcfm9cLHczfY3X4tlCzcH4',
  authDomain: 'blizzardshop-c1285.firebaseapp.com',
  projectId: 'blizzardshop-c1285',
  storageBucket: 'blizzardshop-c1285.appspot.com',
  messagingSenderId: '902790478180',
  appId: '1:902790478180:web:8a9a82e0a5223734eb6271',
  measurementId: 'G-Q4W5KDWSM7',
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
//! firebase.apps.length ?  : ''
export const auth = firebase.auth()
export const github = new firebase.auth.GithubAuthProvider()
export default firebase
