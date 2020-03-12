import {Subscription} from "../utils/subscription";
import Store from "./store";

// TODO: use immutable operations

export function addListItem (name: string): string {
  const id = Math.random() + 'ListItem'
  Store.listItems[id] = { id, name }
  Subscription.doUpdate()
  return id
}

export function addTodoItem (name: string): string {
  const listItemId = Store.currentListId
  const todoId = Math.random() + 'TodoItem'
  if (!(listItemId in Store.todoItemsByListId)) {
    Store.todoItemsByListId[listItemId] = []
  }
  Store.todoItemsByListId[listItemId] = Store.todoItemsByListId[listItemId].concat(todoId)
  Store.todoItems[todoId] = { id: todoId, name }
  Subscription.doUpdate()
  return todoId
}

export function setCurrentListId (listItemId: string): string {
  Store.currentListId = listItemId
  Subscription.doUpdate()
  return listItemId
}
