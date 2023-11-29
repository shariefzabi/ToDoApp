import React, { useReducer, usestate, useRef } from 'react';

export default function Ref() {
  const initialState = { count: 1 };
  const myRef = useRef('hello');

  const inputModifier = (e) => {
    myRef.current.value = 'hello world';
    console.log(myRef.current, myRef);
  };

  return (
    <>
      <div></div>
      <button onClick={() => inputModifier()}>button</button>
      <input ref={myRef}></input>
    </>
  );
}
