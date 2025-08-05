import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../config';

export const deleteSubcollectionAndParent = async (parentId) => {
  const parentRef = doc(db, "testPlans", parentId);
  const subcollectionRef = collection(parentRef, "tests");

  try {
    // 1. Deletar todos os documentos da subcoleção
    const snapshot = await getDocs(subcollectionRef);
    const deleteSubitems = snapshot.docs.map(docItem => deleteDoc(docItem.ref));
    await Promise.all(deleteSubitems);

    // 2. Deletar o documento pai
    await deleteDoc(parentRef);

    console.log("Subcoleção e documento pai deletados com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
};
