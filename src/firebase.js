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
        1: {title: "aaaaaaaaa", description: "׳ששדגדכדכ", user: "כגכד", time: "10:54"},
        2: {title: "bbbbbbbbb", description: "׳ששדגדכדכ", user: "כגכד", time: "76:33"},
        3: {title: "ccccccccc", description: "׳ששדגדכדכ", user: "כגכד", time: "12:00"},
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

export async function addChats() {
    // continue this up to 50 chats
    // {"User1": 'הודעה...', 'User2': 'הודעה...'}

    const chats = [['123', 'משתמש1', 'הודעה...', '01:23'], ['124', 'משתמש2', 'הודעה...', '01:24'], ['125', 'משתמש3', 'הודעה...', '01:25'], ['126', 'משתמש4', 'הודעה...', '01:26'], ['127', 'משתמש5', 'הודעה...', '01:27'], ['128', 'משתמש6', 'הודעה...', '01:28'], ['129', 'משתמש7', 'הודעה...', '01:29'], ['130', 'משתמש8', 'הודעה...', '01:30'],
    ['131', 'משתמש9', 'הודעה...', '01:31'], ['132', 'משתש10', 'הודעה...', '01:32'], ['133', 'משתש11', 'הודעה...', '01:33'], ['134', 'משתש12', 'הודעה...', '01:34'], ['135', 'משתש13', 'הודעה...', '01:35'], ['136', 'משתש14', 'הודעה...', '01:36'], ['137', 'משתש15', 'הודעה...', '01:37'], ['138', 'משתש16', 'הודעה...', '01:38'],
    ['139', 'משתש17', 'הודעה...', '01:39'], ['140', 'משתש18', 'הודעה...', '01:40'], ['141', 'משתש19', 'הודעה...', '01:41'], ['142', 'משתש20', 'הודעה...', '01:42'], ['143', 'משתש21', 'הודעה...', '01:43'], ['144', 'משתש22', 'הודעה...', '01:44'], ['145', 'משתש23', 'הודעה...', '01:45'], ['146', 'משתש24', 'הודעה...', '01:46'],
    ['147', 'משתש25', 'הודעה...', '01:47'], ['148', 'משתש26', 'הודעה...', '01:48'], ['149', 'משתש27', 'הודעה...', '01:49'], ['150', 'משתש28', 'הודעה...', '01:50'], ['151', 'משתש29', 'הודעה...', '01:51'], ['152', 'משתש30', 'הודעה...', '01:52'], ['153', 'משתש31', 'הודעה...', '01:53'], ['154', 'משתש32', 'הודעה...', '01:54']]

    return chats
}


export async function getMessages(id1, id2) {

    return [{me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}, {me: false, message: 'היי', time: '12:23'}, {me: true, message: 'היי', time: '12:23'}]

}