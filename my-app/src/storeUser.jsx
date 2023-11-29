import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export function StoreUser() {
  const count = useSelector((state) => state.reducer1.count);
  console.log(count)
  const dispath = useDispatch();
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispath({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispath({ type: 'decrement' })}>Decerement</button>
    </>
  );
}
