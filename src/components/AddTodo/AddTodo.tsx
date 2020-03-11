import React, {useState} from 'react'
import './AddTodo.sass'
import {addTodoItem} from "../../store/actions";

export default function AddTodo () {
  const [value, setValue] = useState('')

  function onSubmit (e: any) {
    e.preventDefault()
    // addTodoItem(value)
  }

  return (
    <div className="AddTodo">
      <h2>Add a new todo here</h2>
      <form className="AddTodo__Form" onSubmit={onSubmit}>
        <input
          autoFocus={true}
          type="text"
          name="TodoItem"
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
          id="AddTodoForm__TodoItem"
          className="AddTodo__Form__Input"/>
      </form>
    </div>
  )
}
