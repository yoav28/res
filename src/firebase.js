import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, limit, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZyyOVzjH2eFrHUQSXqiCn1HRnlfgOhGE",
    authDomain: "quam-a7dfd.firebaseapp.com",
    projectId: "quam-a7dfd",
    storageBucket: "quam-a7dfd.appspot.com",
    messagingSenderId: "95069193691",
    appId: "1:95069193691:web:89ef067b5c25d8872e13fe"
}

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export async function newQuestions() {

    // const next = {}
    // const q = query(collection(db, "Questions"), limit(10));
    //
    // const querySnapshot = await getDocs(q)
    // querySnapshot.forEach((doc) => {
    //     next[doc.id] = doc.data()
    // })
    const next = {
        1: {title: "aaaaaaaaa", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        2: {title: "bbbbbbbbb", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        3: {title: "ccccccccc", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        4: {title: "ddddddddd", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        5: {title: "eeeeeeeee", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        6: {title: "fffffffff", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        7: {title: "ggggggggg", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        8: {title: "hhhhhhhhh", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        9: {title: "iiiiiiiii", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},
        10: {title: "jjjjjjjjj", description: "׳ששדגדכדכ", user: "כגכד", time: "17s"},

    }

    return next
}

