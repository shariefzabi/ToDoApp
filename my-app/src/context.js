import mycontext from './contextuser.js';
import React, { useReducer, usestate, useRef, useContext } from 'react';

export default function Context() {
  const context = useContext(mycontext);
  return (
    <>
      <div>{context}</div>
      <input value={context}></input>
    </>
  );
}
