import './App.css';
import {useState,useRef} from'react';

function App() {
/*  const ref=useRef(0);
  console.log(ref); */
  const [count, setCount]=useState(0);
  const countRef=useRef(0);
  //console.log(countRef)
  console.log('렌더링');
  const increaseCount = () => {
    setCount(count + 1)
  };
  const increaseCountRef = () => {
    countRef.current=countRef.current+1;
  }
  return(
    <div>
      <p className="state">State: {count}</p>
      <p className="state">Ref : {countRef.current}</p>
      <button className="btn" onClick={increaseCount}>State up</button>
      <button className="btn" onClick={increaseCountRef}>Ref up</button>
    </div>
  )
};

export default App;

