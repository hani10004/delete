import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername]=useState('')
  const [password, setpassword]=useState('')
  const onSubmit= (e)=>{ 
    //form은 전송 후에 refresh(새로고침)됨 --막아야함
    e.preventDefault();
    console.log(username,password)
  }
  //onChange는 input의 값이 바꿀때마다 실행하는 함수
  return (
    <>
    <form onSubmit={onSubmit}>
      <input placeholder='Username' value={username}
      onChange={(e)=>{setUsername(e.target.value)}}/><br/>  

      <input placeholder='Password'value={password} 
      onChange={(e)=>{setpassword(e.target.value)}}/><br/>  
      <button type='submit'>Update</button>
    </form>  
    </>
  );
}

export default App;
