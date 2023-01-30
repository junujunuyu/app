import './App.css';
/* import {useState} from "react" */
/* 다시 */
import {useState} from "react";
import Timer from "./component/Timer";

function App(){
    const[showTimer, setShowTimer]=useState(false)
    return (
        <div className="App1">
            {showTimer && <Timer/>}
            <button className="btn" onClick={() => {setShowTimer(!showTimer)}}>Toggle</button>
        </div>
    );
};

export default App;

