import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    theme: "dark",
    networkSocietyView: "list",
  },
  reducers: {
    themeFn: (state, action) => {
      state.theme = action.payload;
    },
    networkSocietyViewFn: (state, action) => {
      state.networkSocietyView = action.payload;
    },
  },
});

const uiReducer = uiSlice.reducer;
const uiState = (state) => state.ui;
const { themeFn, networkSocietyViewFn } = uiSlice.actions;

export { uiReducer, uiState, themeFn, networkSocietyViewFn };
