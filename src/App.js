import React, { useState, useEffect } from 'react';
import Question from "./Question/question";
import Box from "./Box/Box";
import * as firebase from './firebase';
import './App.css';


export default function App() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(<div/>);
    const [show, setShow] = useState(false);

    useEffect(() => {

        const temp = []

        async function newQuestions() {

        const res = await firebase.newQuestions()

        for (const key in res) {
            const data = res[key]
            const unpack = [data.title, data.description, data.user, data.time]
            const [title, description, user, time] = unpack

            temp.push(
                <div className={'question'} onClick={() => openQuestion(unpack)}>
                    <Box title={title} user={user} time={time} answers={['a', 'b', 'c']}/>
                </div>
            )
        }

        setQuestions(temp)


        }
        newQuestions()

    }, [])


    function openQuestion(args) {

        const [title, description, user, time] = args

        setCurrentQuestion(<Question setShow={setShow} title={title} user={user}/>)
        setShow(true)

    }


    return (
        <div style={{background: 'black', position: 'absolute', width: '100%', height: '100%'}} className="App">
            {show && currentQuestion}
            <div className={'all-questions'}>
                {questions}
            </div>
        </div>
    )
}