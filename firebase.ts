// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqRdkIkLEm3LGZW8Vn6nnAQDUTZ25EpvM',
  authDomain: 'netflix-clone-fbb3f.firebaseapp.com',
  projectId: 'netflix-clone-fbb3f',
  storageBucket: 'netflix-clone-fbb3f.appspot.com',
  messagingSenderId: '29451334732',
  appId: '1:29451334732:web:b989738de504dadc58f0e9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
