import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWOLGiDsWB-qJd1PmxA7Wj_d5C7hLXx8Y",
  authDomain: "miniblog-2968e.firebaseapp.com",
  projectId: "miniblog-2968e",
  storageBucket: "miniblog-2968e.appspot.com",
  messagingSenderId: "1054877104350",
  appId: "1:1054877104350:web:5bf836fc3fc860358b2a4f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db,app};