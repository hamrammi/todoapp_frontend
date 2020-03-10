import React, {useEffect, useState} from 'react'
import './TodoList.sass'
import {getTodos, subscribeOnTodoAdded, unsubscribeOnTodoAdded} from "../../services/api";

export default function TodoList () {
  let [todos, setTodos] = useState(getTodos())
  useEffect(() => {
    function onTodoItemAdded () {
      setTodos(getTodos())
    }
    subscribeOnTodoAdded(onTodoItemAdded)
    return unsubscribeOnTodoAdded
  }, [])

  return (
    <div className="TodoList">
      <div className="TodoList__Items">
        {todos.map(todo =>
          <div key={todo} className="TodoList__Item">{todo}</div>
        )}
      </div>
    </div>
  )
}
