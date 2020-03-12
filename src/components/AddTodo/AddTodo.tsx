import React, {FormEvent, useState} from 'react'
import './AddTodo.sass'
import {addTodoItem} from "../../store/actions";

export default function AddTodo () {
  const [value, setValue] = useState('')

  function onSubmit (e: FormEvent) {
    e.preventDefault()
    addTodoItem(value)
    setValue('')
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="AddTodoForm__TodoItem"
          className="AddTodo__Form__Input"/>
      </form>
    </div>
  )
}
