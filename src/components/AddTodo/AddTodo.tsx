import React from 'react'
import './AddTodo.sass'
import {addTodo} from "../../services/api";

export default function AddTodo () {
  return (
    <div className="AddTodo">
      <h2>Add a new todo here</h2>
      <form className="AddTodo__Form">
        <input
          autoFocus={true}
          type="text"
          name="TodoItem"
          autoComplete="off"
          onChange={(e) => addTodo(e.target.value)}
          id="AddTodoForm__TodoItem"
          className="AddTodo__Form__Input"/>
      </form>
    </div>
  )
}
