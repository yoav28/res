import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from "./Chat/Layout";
import Message from "./Chat/Message";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/chats" element={<Layout/>}/>
            <Route path="/chats/*" element={<Message/>}/>
            <Route path="*" element={<App/>}/>
        </Routes>
    </BrowserRouter>
)
