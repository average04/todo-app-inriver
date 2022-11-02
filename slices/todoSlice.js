import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //{id, todo, state}
  // 0 = active, 1 = completed
  todos:
    typeof window !== "undefined"
      ? localStorage.getItem("todos") !== null
        ? JSON.parse(localStorage.getItem("todos"))
        : []
      : [],
  view: "All",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action) => {
      var toAdd = {
        id:
          state.todos.length > 0
            ? Math.max(...state.todos.map((o) => o.id)) + 1
            : 1,
        todo: action.payload.todo.todo,
        state: 0,
      };
      state.todos = [...state.todos, toAdd];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeState: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, state: todo.state === 1 ? 0 : 1 };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((item) => item.state !== 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeView: (state, action) => {
      state.view = action.payload;
    },
    handleDrop: (state, action) => {
      if (!action.payload.droppedItem.destination) return;
      var updatedList = [...itemList];
      const [reorderedItem] = updatedList.splice(
        action.payload.droppedItem.source.index,
        1
      );
      updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
      state.todos = updatedList;
    },
  },
});

export const {
  create,
  remove,
  changeState,
  clearCompleted,
  changeView,
  handleDrop,
} = todoSlice.actions;

export default todoSlice.reducer;
