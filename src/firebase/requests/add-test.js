import { collection, addDoc } from 'firebase/firestore';
import { db } from "../config"

export const createTestPlan = async(data) => {
  const testPlanRef = await addDoc(collection(db, 'testPlans'), {data});
  return testPlanRef.id;
};