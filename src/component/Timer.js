import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(()=>{
        const timer=setInterval(()=>{ 
            console.log('타이머돌아가는중 빙빙 돌아가는중')
        },1000);
        return () =>{
            clearInterval(timer);
            console.log('타이머 종료')
        };
    },[]);
    return (
        <div>
            <span>타이머~~~~콘솔에서 확인바랍니다.</span> 
        </div>
    );
};

export default Timer;