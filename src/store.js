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

    // 검색하기
    getSearchResult(state, value) {
      let copy =
        JSON.parse(localStorage.getItem("memoList")) !== null
          ? JSON.parse(localStorage.getItem("memoList"))
          : [];
      if (value !== "" && copy.length !== 0) {
        let result = copy.filter((item) => {
          return (
            item.title.toUpperCase().includes(value.payload.toUpperCase()) ||
            item.content.toUpperCase().includes(value.payload.toUpperCase())
          );
        });
        return result;
      } else {
        return copy;
      }
    },
  },
});

export const { updateMemoList, getSearchResult } = memoList.actions;

export default configureStore({
  reducer: {
    memoList: memoList.reducer,
  },
});
