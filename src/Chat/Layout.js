import React, {useEffect, useState} from "react";
import * as firebase from "../firebase";
import App from "../App";


let lastClick = Date.now()

export default function Layout() {

    require('./Layout.css');
    const [chats, setChats] = useState([]);

    useEffect(() => {

        async function newChats() {
            const temp = []
            const result = await firebase.addChats()

            for (const res of result) {
                const [id, user, message, time] = res

                temp.push(
                    <div onClick={() => window.location.href = 'chats/' + id} className={'chat'} key={user}>
                        <h4 className={'chat-title'}>{user}</h4>
                        <p className={'chat-description'}>{message}</p>
                        <p className={'chat-time'}>{time}</p>
                    </div>
                )
            }

            setChats(temp)
        }

        newChats()
    }, [])

    function onClose() {
        console.log(Date.now() - lastClick)
        if (Date.now() - lastClick > 50) {
            window.location.href = '/'
        }
        lastClick = Date.now()
    }

    return (
        <div onClick={onClose}>
            <App/>
            <div className={'Container'}>
                <div className="Layout" onClick={() => lastClick = Date.now()}>

                    <div className={'top'}>

                    </div>

                    <div className={'bottom'}>
                        {chats}
                    </div>
                </div>
            </div>
        </div>
    )
}