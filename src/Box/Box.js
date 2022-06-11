import React from "react";


function getAuthorText(author, time) {

    return `נשאל על ידי ${author} לפני ${time}`;
}


export default function Box(props) {
    require("./tailwind.css");

    return (
        <div className="flex pb-8 mx-auto rtl">
            <div className="ta">
                <div className="py-2">
                    <div className="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer pr-3">
                        <div className="w-11/12 pt-2">

                            <div className="flex items-center text-xs mb-3">
                                <span className="text-grey">{getAuthorText(props.user, props.time)}</span>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-2">{props.title}</h2>
                            </div>

                            <div className="inline-flex items-center my-1">
                                <div className="flex p-1">
                                    <svg className="w-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" /></svg>
                                    <span className="mr-1 text-xs font-semibold text-grey">{props.answers.length} תשובות</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}