import { createStore } from "redux";
import todoApp from "./reducers";
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

const store = createStore(todoApp);
