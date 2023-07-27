import { configureStore, createSlice } from "@reduxjs/toolkit";

const memoList = createSlice({
  name: "memoList",
  initialState:
    JSON.parse(localStorage.getItem("memoList")) !== null
      ? JSON.parse(localStorage.getItem("memoList"))
      : [],
  reducers: {
    updateMemoList() {
      return JSON.parse(localStorage.getItem("memoList"));
    },
  },
});

export const { updateMemoList } = memoList.actions;

export default configureStore({
  reducer: {
    memoList: memoList.reducer,
  },
});
