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

    // 정렬하기
    sortMemoList(state, sortOption) {
      sortOption = parseFloat(sortOption.payload);

      let copy =
        JSON.parse(localStorage.getItem("memoList")) !== null
          ? JSON.parse(localStorage.getItem("memoList"))
          : [];

      // 정렬하기 - 최신순
      if (sortOption === 0) {
        copy.sort((a, b) => {
          return new Date(b.dateTime) - new Date(a.dateTime);
        });
        return copy;
      }

      // 정렬하기 - 등록순
      if (sortOption === 1) {
        copy.sort((a, b) => {
          return new Date(a.dateTime) - new Date(b.dateTime);
        });
        return copy;
      }
    },
  },
});

export const { updateMemoList, getSearchResult, sortMemoList } =
  memoList.actions;

export default configureStore({
  reducer: {
    memoList: memoList.reducer,
  },
});
