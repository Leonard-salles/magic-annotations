import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../../firebase/config"

export const listenToAllTests = (callback, collectionName) => {
  const testsRef = collection(db, collectionName);

  const q = query(testsRef, orderBy("data", "asc")); 

  return onSnapshot(q, (snapshot) => {
    const tests = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(tests); // envia os dados atualizados para a UI
  });
}