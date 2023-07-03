// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import {
  getReactNativePersistence,
    initializeAuth,
  } from 'firebase/auth/react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBj3uc968rgDOBtkvUFrBei_jazu4BgfTw',
  authDomain: 'awesomeproject-goit.firebaseapp.com',
  databaseURL: 'https://awesomeproject-goit-default-rtdb.firebaseio.com/',
  projectId: 'awesomeproject-goit',
  storageBucket: 'awesomeproject-goit.appspot.com',
  messagingSenderId: '712467997777',
  appId: '1:712467997777:ios:bffa4ac26017490d8a4470',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});