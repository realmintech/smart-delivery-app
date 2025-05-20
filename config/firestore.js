import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "./firebase-config";

const db = getFirestore(auth);

export const saveUserData = async (user) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    email: user.email,
    displayName: user.displayName || "",
    createdAt: new Date(),
  });
};
