import { Filters } from "../../utils/FiltersEnum";
import { Todo } from "../../utils/Todo";
import { RootState } from "../store";

export const getTodoList = (store: RootState) => store.todos;

export const getTodosByVisibilityFilter = (store: RootState, visibilityFilter: Filters) => {
  const allTodos = getTodoList(store);
  switch (visibilityFilter) {
    case Filters.COMPLETED:
      return allTodos.filter((todo: Todo) => todo.isCompleted);
    case Filters.INCOMPLETE:
      return allTodos.filter((todo: Todo) => !todo.isCompleted);
    case Filters.ALL:
    default:
      return allTodos;
  }
};
