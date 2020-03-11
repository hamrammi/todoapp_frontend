import React from 'react'
import './TodoList.sass'
import {useStore} from "../../utils/hooks";
import {State, TodoItemsByListId} from "../../store/store";

export default function TodoList () {
  let currentListId: string = useStore((store: State) => store.currentListId)
  let todoItems: TodoItemsByListId = useStore((store: State) => store.todoItemsByListId[currentListId])

  return (
    <div className="TodoList">
      <div className="TodoList__Items">
        {todoItems && Object.keys(todoItems).map(todoId => {
          const todoItem = todoItems[todoId]
          return (<div key={todoId} className="TodoList__Item">{todoItem.name}</div>)
        })}
      </div>
    </div>
  )
}
