import React, {useEffect, useState} from "react";
import App from "../App";
import * as firebase from "../firebase";

let lastClick = Date.now()


export default function Message() {

    const [username, setUsername] = useState("");

    require('./Layout.css');

    useEffect(() => {
        const id = window.location.pathname.split('/')[2]

        async function getChats() {
            const temp = []
            const result = await firebase.addChats()
        }
        setUsername(id)
        scam()
    }, [])

    function onClose() {
        console.log(Date.now() - lastClick)
        if (Date.now() - lastClick > 50) {
            window.location.href = '/'
        }
        lastClick = Date.now()
    }


    function scam() {
            const textarea = document.getElementById('message')
            const send = document.getElementsByClassName('send')
            const photo = document.getElementsByClassName('photo')

            // $("body").on("contextmenu", ".blue-tick", function (e) {
            //     return false;
            // });
            // translate this to react.js
            document.body.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });

            for (let a in photo) {
                const b = photo[a].id
                if (b) {
                    console.log(b)
                    document.getElementById(b.id).style.display = 'none'
                }
                // photo[a].style.display = 'none'
            }
            // send.hide();

            // textarea
            //     .on("input keydown keyup", function () {
            //         textarea.height(0).height(this.scrollHeight);
            //         if (textarea.val().trim().length > 0) {
            //             send.show();
            //             photo.hide();
            //         } else {
            //             send.hide();
            //             photo.show();
            //         }
            //     })
            //     .find(textarea)
            //     .change();

            // document.getElementsByClassName('person').click(() => {
            //     textarea.focus();
            // });

            //     function add() {
            //         var message = textarea.val().trim();
            //         $(".messages").append(
            //             "<div class='clip sent'><div class='text'>" + message + "</div></div>"
            //         );
            //         $(".content").html(
            //             "<div class='message'> <b>You :</b> " + message + "</div>"
            //         );
            //         textarea.val("");
            //         send.hide();
            //         photo.show();
            //
            //         textarea.focus();
            //         textarea.height("");
            //     }
            //
            //     send.click(() => {
            //         add();
            //     });
            //
            //     textarea.on("keydown", (event) => {
            //         if (event.keyCode == 13 && !event.shiftKey) {
            //             if (textarea.val().trim().length > 0) {
            //                 send.removeAttr("disabled");
            //                 add();
            //             }
            //             event.preventDefault();
            //         }
            //     });
            // });
    }


    return (
        <div onClick={onClose}>
            <App/>
            <div className={'Container'}>
                <div className="Layout" onClick={() => lastClick = Date.now()}>
                    <div className="case">
                        <div className="container">
                            <div className="right">
                                <div className="top">
                                    <div className="box">
                                        <div className="image">
                                            <img src="https://cdn2.bigcommerce.com/server5400/3po1k2/products/8171/images/14559/161_light_blue__46032.1418747956.1280.1280.jpg?c=2g" width="30px" height="30px" alt="" />
                                        </div>
                                        <div className="online" />
                                    </div>
                                    <p className={'username'}>{username}</p>

                                </div>
                                {/*<div className="middle">*/}
                                {/*    <div className="tumbler">*/}
                                {/*        <div className="messages">*/}
                                {/*            <div className="clip sent">*/}
                                {/*                <div className="text">hi</div>*/}
                                {/*            </div>*/}
                                {/*            <div className="clip received">*/}
                                {/*                <div className="text">hello</div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="seen">Seen</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="bottom">
                                    <div className="cup">
                                        <div className="picker">
                                            <svg width="25px" height="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style={{enableBackground: 'new 0 0 100 100'}} xmlSpace="preserve">
                                                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                .ep0 {\n                  fill: #ffffff;\n                  stroke: #000000;\n                  stroke-width: 5;\n                  stroke-miterlimit: 10;\n                }\n\n                .ep1 {\n                  stroke: #000000;\n                  stroke-width: 5;\n                  stroke-miterlimit: 10;\n                }\n              " }} />
                                                <g>
                                                    <ellipse className="ep0" cx={50} cy={50} rx="38.7" ry="38.7" />
                                                    <path className="ep1" d="M50,90c-22.2,0-40-18.1-40-40s17.8-40,40-40s40,18.1,40,40S72.2,90,50,90z M50,12.6
                           c-20.6,0-37.5,16.8-37.5,37.4S29.4,87.4,50,87.4S87.5,70.6,87.5,50S70.6,12.6,50,12.6z" />
                                                </g>
                                                <path className="ep0" d="M63.5,62.4c0,3.4-6.1,6.2-13.5,6.2s-13.5-2.8-13.5-6.2" />
                                                <ellipse className="ep1" cx="36.8" cy="45.9" rx="2.3" ry="2.3" />
                                                <ellipse className="ep1" cx="62.2" cy="45.9" rx="2.3" ry="2.3" />
                                            </svg>
                                        </div>
                                        <textarea id="message" cols={30} rows={1} placeholder="Message..." defaultValue={""} />
                                        <button className="send">Send</button>
                                        <div className="picker photo">
                                            <svg width="25px" height="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style={{enableBackground: 'new 0 0 40 40'}} xmlSpace="preserve">
                                                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                .ip0 {\n                  fill: #ffffff;\n                  stroke: #000000;\n                  stroke-width: 3;\n                  stroke-miterlimit: 10;\n                }\n\n                .ip1 {\n                  stroke: #000000;\n                  stroke-miterlimit: 10;\n                }\n              " }} />
                                                <path className="ip0" d="M31.3,35.1H8.7c-2.9,0-5.2-2.3-5.2-5.2V10.1c0-2.9,2.3-5.2,5.2-5.2h22.6c2.9,0,5.2,2.3,5.2,5.2v19.8
                       C36.5,32.8,34.2,35.1,31.3,35.1z" />
                                                <polyline className="ip0" points="3.5,32.2 13.4,23.7 18,27.9 29.3,18.6 36.5,24.8 " />
                                                <ellipse className="ip1" cx="10.7" cy="12.3" rx="1.6" ry="1.5" />
                                            </svg>
                                        </div>
                                        <div className="picker photo">
                                            <svg width="25px" height="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style={{enableBackground: 'new 0 0 100 100'}} xmlSpace="preserve">
                                                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                .ht0 {\n                  fill: #ffffff;\n                  stroke: #000000;\n                  stroke-width: 8;\n                  stroke-miterlimit: 10;\n                }\n              " }} />
                                                <path className="ht0" d="M84.7,21.2c-3.6-3.9-8.3-5.8-13.1-5.8c-4.7,0-9.3,1.9-12.9,5.6L50,30.1l-8.6-9.2c-3.6-3.9-8.3-5.8-13.1-5.8
                       c-4.6,0-9.3,1.9-12.9,5.6c-7.2,7.5-7.3,19.8-0.2,27.5l8.6,9.2L49.6,85l26.2-27.2l8.7-9.1C91.7,41.2,91.8,28.9,84.7,21.2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
