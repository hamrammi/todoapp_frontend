import React from 'react'
import './Content.sass'
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import {useStore} from "../../utils/hooks";
import {ListItems, State} from "../../store/store";

export default function Content () {

  const listItems: ListItems = useStore((store: State) => store.listItems)

  return (
    <div className="Content">
      <AddTodo/>
      {Object.keys(listItems).map((listItemId) => {
        const listItem = listItems[listItemId]
        return (<div>{listItem.name}</div>)
      })}
      <TodoList/>
    </div>
  )
}
