import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase/config"

export const listenToAllItems = (callback, collectionName, id, subcolectionName) => {
  const testsRef = collection(doc(db, collectionName, id), subcolectionName);

  return onSnapshot(testsRef, (snapshot) => {
    const tests = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(tests); // envia os dados atualizados para a UI
  });
}