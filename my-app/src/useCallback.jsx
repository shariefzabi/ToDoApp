import React, { useCallback, useReducer, useState } from 'react';
let helo = 'hii';

const CallBack = () => {
  const initialState = { count: 1 };

  const reducer = (initialState = { count: 1 }, action) => {
    switch (action.type) {
      case 'increment':
        return { ...initialState, count: initialState.count + 1 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('hii', state.count);
  const hello = useCallback(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <div>{state.count}</div>
      <button
        onClick={() => {
          helo = 'hello';
        }}
      >
        button
      </button>
      <div>
        <ChildFunction functionProp={hello} />
      </div>
    </>
  );
};

const ChildFunction = ({ functionProp }) => {
  console.log('printed');
  return <button onClick={() => functionProp()}>childButton</button>;
};

export default CallBack;
