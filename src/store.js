import { configureStore, createSlice } from "@reduxjs/toolkit";

let memoList = createSlice({
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

export let { updateMemoList } = memoList.actions;

export default configureStore({
  reducer: {
    memoList: memoList.reducer,
  },
});
