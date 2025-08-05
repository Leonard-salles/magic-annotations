import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config';

export const deleteSubitemById = async (subitemId) => {
  const parentCollectionRef = collection(db, "testPlans");

  try {
    const parentDocs = await getDocs(parentCollectionRef);

    for (const parentDoc of parentDocs.docs) {
      const subitemRef = doc(db, "testPlans", parentDoc.id, "tests", subitemId);
      try {
        await deleteDoc(subitemRef);
        console.log(`Subitem ${subitemId} deletado de ${parentDoc.id}`);
        return;
      } catch (error) {
        // ignora se não existir
      }
    }

    console.log("Subitem não encontrado em nenhum documento pai.");
  } catch (error) {
    console.error("Erro ao buscar documentos pai:", error);
  }
};
