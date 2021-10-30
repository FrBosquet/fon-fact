import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  onSnapshot
} from "firebase/firestore";
import people from "./content/people.json";
import places from "./content/places.json";
import actions from "./content/actions.json";
import moments from "./content/moments.json";
import consecuences from "./content/consecuences.json";

const firebaseConfig = {
  apiKey: "AIzaSyDbQjt6FNL5jJPncDjXdk6rB9dfEMafyjg",
  authDomain: "fonfact-d67a0.firebaseapp.com",
  projectId: "fonfact-d67a0",
  storageBucket: "fonfact-d67a0.appspot.com",
  messagingSenderId: "713556115710",
  appId: "1:713556115710:web:a1b890c824dbdb994de5af",
  measurementId: "G-CB8K04GGGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const seed = async () => {
  try {
    await setDoc(doc(db, "frases", "people"), { data: people });
    await setDoc(doc(db, "frases", "places"), { data: places });
    await setDoc(doc(db, "frases", "actions"), { data: actions });
    await setDoc(doc(db, "frases", "moments"), { data: moments });
    await setDoc(doc(db, "frases", "consecuences"), { data: consecuences });

    console.log("Done with seeding");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const subscribe = (cb) => {
  const col = collection(db, "frases");

  const unsub = onSnapshot(col, (snaps) => {
    const data = {};

    snaps.forEach((s) => {
      data[s.id] = s.data().data;
    });

    cb(data);
  });

  return unsub;
};
