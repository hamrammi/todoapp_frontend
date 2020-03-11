
interface ListItem {
  id: string
  name: string
}

export interface ListItems {
  [key: string]: ListItem
}

interface TodoItem {
  id: string
  name: string
}

export interface TodoItemsByListId {
  [key: string]: { [key: string]: TodoItem }
}

export interface State {
  currentListId: string
  listItems: ListItems
  todoItemsByListId: TodoItemsByListId
}

const Store: State = {
  currentListId: '',
  listItems: {},
  todoItemsByListId: {}
}

export default Store
