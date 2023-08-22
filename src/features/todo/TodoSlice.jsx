import { createSlice } from "@reduxjs/toolkit";
import todoItemsData from "../../data/todoItemsData";

const initialState = {
  todoItemsData: todoItemsData,
  amount: todoItemsData.length,
  searchKeyword: "",
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const getMaxId = () => {
        let todoIdArray = [];
        state.todoItemsData.map((item) => {
          todoIdArray.push(item.id);
        });
        return Math.max(...todoIdArray);
      };
      const setId = state.amount !== 0 ? getMaxId()+1 : 1 ;
      state.amount += 1;
      state.todoItemsData.push({
        id: setId,
        title: action.payload.title,
        content: action.payload.content,
      });
      state.searchKeyword = "";
    },
    deleteTodo(state, action) {
      const newTodoItems = state.todoItemsData.filter((item) => {
        if (item.id !== action.payload) return true;
      });
      state.todoItemsData = newTodoItems;
      state.amount = state.todoItemsData.length;
    },
    updateTodo(state, action) {
      const newTodoItems = state.todoItemsData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            content: action.payload.content,
          };
        }
        return { ...item };
      });
      state.todoItemsData = newTodoItems;
    },
    clearTodo() {
      return { todoItemsData: [], amount: 0 };
    },
    searchTodo(state, action) {
      state.searchKeyword = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, clearTodo, searchTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
