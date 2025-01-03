import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    universities: [],
    courses: [],
    semesters: [],
    subjects: [],
    bot: "",
  },
};

export const selectBotSlice = createSlice({
  name: "selectBot",
  initialState,
  reducers: {
    setUniversities: (state, action) => {
      state.value.universities = action.payload;
    },
    setCourses: (state, action) => {
      state.value.courses = action.payload;
    },
    setSemesters: (state, action) => {
      state.value.semesters = action.payload;
    },
    setSubjects: (state, action) => {
      state.value.subjects = action.payload;
    },
    setBot: (state, action) => {
      state.value.bot = action.payload;
    },
  },
});

export const {
  setUniversities,
  setCourses,
  setSemesters,
  setSubjects,
  setBot,
} = selectBotSlice.actions;

export default selectBotSlice.reducer;
