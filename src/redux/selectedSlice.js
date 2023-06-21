import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Ms Office",
    selected: false,
    question: "Hansı Ms Office proqramlarını bilirsiniz?*",
    option: [
      {
        id: 1,
        name: "Word",
        active: false,
      },
      {
        id: 2,
        name: "Excel",
        active: false,
      },
      {
        id: 3,
        name: "PowerPoint",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Proqramlaşdırma dilləri",
    selected: false,
    question: " Hansı programlaşdırma dillərini bilirsiniz?*",
    option: [
      {
        id: 1,
        name: "Python",
        active: false,
      },
      {
        id: 2,
        name: "Java",
        active: false,
      },
      {
        id: 3,
        name: "Javascript",
        active: false,
      },
      {
        id: 4,
        name: "C/C++",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Dizayn proqramları",
    selected: false,
    question: " Hansı dizayn proqramlarını bilirsiniz?*",
    option: [
      {
        id: 1,
        name: "Figma",
        active: false,
      },
      {
        id: 2,
        name: "Adobe İllustrator",
        active: false,
      },
      {
        id: 3,
        name: "Photodhop",
        active: false,
      },
      {
        id: 4,
        name: "Canva",
        active: false,
      },
    ],
  },
  {
    id: 4,
    name: "Digər Proqramlar",
    selected: false,
    question: " Hansı digər proqramları bilirsiniz?*",
  },
];

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectChange: (state, action) => {
      const { id, selected } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      state[index].selected = !state[index].selected;
    },
    optionChange: (state, action) => {
      const { id, selected } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      state[index].option[index].active = !state[index].option[index].active;
      console.log(state[index].option[index].active);
    }
  },
});

export default selectedSlice.reducer;

export const { selectChange, catagoryAll,optionChange } = selectedSlice.actions;

export const selectAllData = (state) => state.selected;
