import React from 'react';
import './style.css';
import Red from './myfunc.jsx';
import CallBack from './useCallback.jsx';
import Ref from './ref';
import mycontext from './contextuser.js';
import Context from './context.js';
import Toggler from './toggler';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { StoreUser } from './storeUser.jsx';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { StudentTable } from './studentTable';
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          < Routes>
            <Route path="" element={<Toggler />}></Route>
            <Route path="/storeUser" element={<StoreUser />}></Route>


          </Routes>
        </Router>
        <StudentTable />
      </div>
    </Provider>
  );
}
