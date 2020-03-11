import {Subscription} from "../utils/subscription";
import Store, {TodoItemsByListId} from "./store";

export function addListItem (name: string): string {
  const id = Math.random() + 'ListItem'
  Store.listItems[id] = { id, name }
  Subscription.doUpdate()
  return id
}

export function addTodoItem (listItemId: string, name: string): string {
  const id = Math.random() + 'TodoItem'
  const todoItem = Store.todoItemsByListId[listItemId]
  todoItem[id] = { id, name }
  Subscription.doUpdate()
  return id
}

export function setCurrentListId (listItemId: string): string {
  Store.currentListId = listItemId
  Subscription.doUpdate()
  return listItemId
}
