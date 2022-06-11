import React, {useEffect, useState} from "react";


let lastClick = Date.now()

export default function Question(props) {

    require('./quetion.css')
    const [answers, setAnswers] = useState([]);
    const [content, setContent] = useState(<div/>);
    const setShow = props.setShow

    useEffect(() => {

        const all = {'answer1': 'answer1', 'answer2': 'answer2', 'answer3': 'answer3', 'answer4': 'answer4'}
        const temp = []

        for (const key in all) {
            const [answer, description] = [key, all[key]]
            //
            // temp.push(
            //     <div className={'answer'}>
            //
        }
    }, [])

    function onClose() {
        console.log(Date.now() - lastClick)
        if (Date.now() - lastClick > 50) {
            setShow(false)
        }
        lastClick = Date.now()
    }

    return (
        <div>
            <div className={'layer'} id={'layer'} onClick={onClose}>
                <div className={'container'} onClick={() => lastClick = Date.now()}>

                    <div className={'top'}>
                        <h2 className={'title'}>
                            {props.title}
                        </h2>
                    </div>

                    <div className={'middle'}>
                        <p className={'user'}>{props.user}</p>
                    </div>

                    <div className={'answers'}>
                        {answers}
                    </div>
                </div>
            </div>
        </div>

    )
}