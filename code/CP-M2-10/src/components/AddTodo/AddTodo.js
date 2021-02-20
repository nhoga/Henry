import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index.js'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo() {
  return (
    <div>
      <form>
        <label>Title</label>
        <input name="title"></input>
        <label>Description</label>
        <textarea name="description"></textarea>
        <label>Place</label>
        <input name="place"></input>
        <label>Date</label>
        <input name="date"></input>
        <button type="submit"></button>
      </form>
    </div>
  )
};

export default AddTodo