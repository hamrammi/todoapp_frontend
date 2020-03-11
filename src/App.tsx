import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {addListItem, setCurrentListId} from "./store/actions";

function App () {

  const list1 = addListItem('List 1')
  addListItem('List 2')
  setCurrentListId(list1)

  return (
    <div>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
