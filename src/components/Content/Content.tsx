import React from 'react'
import './Content.sass'
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

export default function Content () {
  return (
    <div className="Content">
      <AddTodo/>
      <TodoList/>
    </div>
  )
}
