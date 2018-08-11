import React from 'react';
import ReactDOM from 'react-dom';

import {Hello,Button} from "./component"

const root  = document.getElementById("root");
ReactDOM.render(
    <div>
        <Hello/>
        <Button/>  
    </div>,
    root
)

console.log(React)
console.log(ReactDOM)