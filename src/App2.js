import './App.css';
/* import {useState} from "react" */
/* 다시 */
import {useEffect, useState} from "react";

function App(){
  //화면의 첫 렌더링(Mount),다시하는(재) 렌더링은(update), 화면에서 사라질때 (Unmount)
  //Dependency,clean up
  const [count, setCount] = useState(1)
  const [input,setInput] = useState("");

  const clickUpdate = () => {
    setCount(count+1)
  }

  const inputUpdate = (e) => {
    setInput(e.target.value)
  }

  //useEffect(() => {
   // console.log('렌더링😎😎');
  //},[count])//,[count]아무것도 안쓰면 렌더링이 계속된다 바뀔때만 렌더링이 되게끔 하려면 지금처럼 쓰면된다.
  
  useEffect(() => {
    console.log('밥팅이');
  },[input])
  
  return (
    <div>
      <button onClick={clickUpdate} className='btn'>Update</button>
      <span>count : {count}</span>
      <input type="text" value={input} onChange={inputUpdate}/>
      <span>{input}</span>
    </div>
  );
};

export default App;

