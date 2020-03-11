import {Subscription} from "../utils/subscription";
import Store from "./store";

export function addTodo (name: string): void {
  Store.todoItems = Store.todoItems.concat(name)
  Subscription.doUpdate()
}
