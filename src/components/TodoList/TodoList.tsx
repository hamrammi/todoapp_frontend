import React from 'react'
import './TodoList.sass'
import {useStore} from "../../utils/hooks";
import {State, TodoItems} from "../../store/store";

export default function TodoList () {
  const currentListId: string = useStore((store: State) => store.currentListId)
  const todoItemIds: string[] = useStore((store: State) => store.todoItemsByListId[currentListId])
  const todoItems: TodoItems = useStore((store: State) => store.todoItems)

  return (
    <div className="TodoList">
      <div className="TodoList__Items">
        {todoItemIds && todoItemIds.map(todoItemId => {
          const todoItem = todoItems[todoItemId]
          return (<div key={todoItemId} className="TodoList__Item">{todoItem.name}</div>)
        })}
      </div>
    </div>
  )
}
