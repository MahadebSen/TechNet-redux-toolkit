import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9Zvdeyp5hlLL4dtVJX-sf-XVkT5Rlhvc',
  authDomain: 'technet-81747.firebaseapp.com',
  projectId: 'technet-81747',
  storageBucket: 'technet-81747.appspot.com',
  messagingSenderId: '342706365157',
  appId: '1:342706365157:web:e980c1c8b63e8990426a0c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
