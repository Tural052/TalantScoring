import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 5,
    name: "Proqram bilikləri",
    substage: {
      id: 1,
      questions: [
        {
          id: 1,
          question: "Hansı program növlərini bilirsiniz?",
          active: false,
          option: [
            {
              id: 1,
              name: "Ms Office",
              selected: false,
            },
            {
              id: 2,
              name: "Proqramlaşdırma dilləri",
              selected: false,
            },
            {
              id: 3,
              name: "Dizayn proqramları",
              selected: false,
            },
            {
              id: 4,
              name: "Digər Proqramlar",
              selected: false,
            },
          ],
        },
      ],
    },
  },
  
];

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    selectType: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].selected = !state[index].selected;
    },
  },
});

export const { selectType } = typeSlice.actions;

export const selectTypeAll = (state) => state.type;

export default typeSlice.reducer;
