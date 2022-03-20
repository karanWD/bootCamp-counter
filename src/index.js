import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const jsx = <div>JSX</div>

// const jsRender = () => {
//     const root = document.querySelector("#root")
//     const div = document.createElement("div")
//     const title = document.createElement("h1")
//     const paragraph = document.createElement("p")
//     title.innerHTML = "HELLO"
//     paragraph.innerHTML = "How are you"
//     div.appendChild(title)
//     div.appendChild(paragraph)
//     root.appendChild(div)
//     document.querySelector("#root").innerHTML=`<div><h1>hi</h1><p>how are you</p></div>`
// }
// jsRender()


// ReactDOM.render(
//     React.createElement(App,{color:"red"},<h1>React Hi</h1>),
//     document.getElementById(    'root')
// );



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
