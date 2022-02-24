import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNhDnbJMAaJL7AqPj3WmawFJXekKUoT-c",
  authDomain: "shopmaytinh-f4fce.firebaseapp.com",
  projectId: "shopmaytinh-f4fce",
  storageBucket: "shopmaytinh-f4fce.appspot.com",
  messagingSenderId: "63508055277",
  appId: "1:63508055277:web:b038f91b5783ee7a2678e4",
  measurementId: "G-TBW4XQNSLB",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
