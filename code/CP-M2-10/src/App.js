import React from 'react'
import './App.css';
import { Route } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Nav } from "./components/Nav/Nav"
import { AddTodo } from "./components/AddTodo/AddTodo"




// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Home}></Route>
      <Route path="/add" component={AddTodo}></Route>
    </React.Fragment>
  );
}

export default App;
