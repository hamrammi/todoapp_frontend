import React from 'react'
import './TodoList.sass'
import {useStore} from "../../utils/hooks";
import { State } from "../../store/store";

export default function TodoList () {
  let todos: string[] = useStore((store: State) => store.todoItems)

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
