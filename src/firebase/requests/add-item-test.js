import { doc, collection, addDoc } from 'firebase/firestore';
import { db } from "../config"

export const addSubitem = async (id, data) => {

    const projetoRef = doc(db, "testPlans", id);
    const testsRef = collection(projetoRef, "tests");
    
    try {
        await addDoc(testsRef, data);
        console.log("Novo subitem criado com sucesso!");
    } catch (error) {
        console.log("Erro ao criar subitem: " + error);
    }

}