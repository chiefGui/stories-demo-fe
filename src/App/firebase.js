import firebase from 'firebase'
import 'firebase/database'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyChU_2-OMk5QLcKFMtpvTBC6J9wSyORXIw',
  authDomain: 'levo-stories-demo.firebaseapp.com',
  databaseURL: 'https://levo-stories-demo.firebaseio.com',
  projectId: 'levo-stories-demo',
  storageBucket: '',
  messagingSenderId: '198499408898'
}

firebase.initializeApp(FIREBASE_CONFIG)
