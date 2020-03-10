
type Store = {
  items: string[]
}

let store: Store = {
  items: ['Make an awesome Redux', 'Play some games']
}

const noop = () => {}

interface Subscriptions {
  onTodoAdded: Function
}

const subscriptions: Subscriptions = {
  onTodoAdded: noop
}

export function getTodos (): string[] {
  return store.items
}

export function addTodo (name: string): void {
  let items = store.items
  items = items.concat(name)

  store = Object.assign({}, store, {
    items: items
  })

  subscriptions.onTodoAdded()
}

export function subscribeOnTodoAdded (fn: Function) {
  console.log('subscribe');
  subscriptions.onTodoAdded = fn
}

export function unsubscribeOnTodoAdded () {
  console.log('unsubscribe');
  subscriptions.onTodoAdded = noop
}
