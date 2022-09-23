import "./App.css";

import React, { useState } from 'react';

import DropDown from './components/DropDown';
import Data from "./json/mockdata";

function App() {

  const [order, setOrder] = useState([])
  const [parent, setParent] = useState([])
  const [clicks, setClicks] = useState(0)

  return (
    <div className="App">
      <DropDown mockdata={Data} order={order} setOrder={setOrder} clicks={clicks} setClicks={setClicks} parent={parent} setParent={setParent} />
    </div>
  );
}

export default App;
