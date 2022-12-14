// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const db = firebase.initializeApp({
    projectId: 'alischileanrestaurant'
}).firestore();

export default () => {
    const readOperation = async (collectionName: any) => {
        const firebaseCollection = db.collection(collectionName);
        const querySnapshot = await firebaseCollection.get();
        const result = querySnapshot.docs.map((doc: any) => {
            return {...doc.data()}
        });
        return result;
    };
    const createOperation = async (collectionName: any, data: any) => {
        const firebaseCollection = db.collection(collectionName);
        const firebaseObject = await firebaseCollection.add(data);
        console.log(firebaseObject);
        return firebaseObject;
    }
    const deleteOperation = async (collectionName: any, username: any) => {
        const firebaseCollection = db.collection(collectionName);
        const querySnapshot = await firebaseCollection.where('username', "==", username).get();        
        const result = querySnapshot.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        });
        firebaseCollection.doc(`${result[0].id}`).delete();
    }
    const findIdForDoc = async (collectionName: any, username: any) => {
        const firebaseCollection = db.collection(collectionName);
        const querySnapshot = await firebaseCollection.where('username', "==", username).get();        
        const result = querySnapshot.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        });
        return result[0];
    }
    const updateOperation = async (collectionName: any, updatedData: any) => {
        const firebaseCollection = db.collection(collectionName);
        firebaseCollection.doc(updatedData.id).update(updatedData);
    }
    return {
        readOperation,
        createOperation,
        deleteOperation,
        findIdForDoc,
        updateOperation
    };
};