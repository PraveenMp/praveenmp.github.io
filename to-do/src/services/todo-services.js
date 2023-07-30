import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from "firebase/firestore";

const todoCollection = collection(db, "todocollection");

class TodoDataService {

    addTasks = (newTask) => {
        return addDoc(todoCollection, newTask);
    }
    updateTask = (id, updateTask) => {
        const toDoDoc = doc(db, "todocollection", id);
        return updateDoc(toDoDoc, updateTask);
    }
    deleteTask = (id) => {
        const toDoDoc = doc(db, "todocollection", id);
        return deleteDoc(toDoDoc);

    }

    getAllTasks = () => {
        const q = query(todoCollection, orderBy("dateTimeStamp") );
        return getDocs(q);
    }

    getTask = (id) => {
        const toDoDoc = doc(db, "todocollection", id);
        return getDoc(toDoDoc);

    }
}

export default new TodoDataService();