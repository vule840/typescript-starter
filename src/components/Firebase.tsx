import React from "react";
import { initializeApp, getApps } from "firebase/app";
// import { getApps } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const Firebase = () => {
  const firebaseApp = getApps()[0];
  const db = getFirestore(firebaseApp);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    fetchData();
  }, []);
  console.log(db);
  return (
    <div>
      <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
    </div>
  );
};

export default Firebase;
