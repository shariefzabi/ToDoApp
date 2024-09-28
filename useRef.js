import React, { useReducer, usestate, useRef } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

export default function Ref() {
    const initialState = { count: 1 };
    const myRef = useRef('hello');


    const inputModifier = (e) => {
        myRef.current.value = myRef.current.value ? '' : 'hello world';

    };
    const value = useMemo(() => {
        return myRef.current.value

    }, [myRef.current.value])
    console.log('value', value)
    return (
        <>
            <div></div>
            <button onClick={() => inputModifier()}>button</button>
            <input ref={myRef}></input>
        </>
    );
}
