
// ---- List Items ----
interface ListItem {
  id: string
  name: string
}

export interface ListItems {
  [key: string]: ListItem
}

// ---- _Todo Items ----
interface TodoItem {
  id: string
  name: string
}

export interface TodoItems {
  [key: string]: TodoItem
}

// ---- The State Interface ----
export interface State {
  currentListId: string
  listItems: ListItems
  todoItemsByListId: { [key: string]: string[] }
  todoItems: TodoItems
}

const Store: State = {
  currentListId: '',
  listItems: {},
  todoItemsByListId: {},
  todoItems: {}
}

export default Store
