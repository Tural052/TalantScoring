import { configureStore } from "@reduxjs/toolkit";
import selectedSlice from "../redux/selectedSlice";
import typeSlice from "../redux/typeSlice";

export default configureStore({
  reducer: {
    selected: selectedSlice,
    type:typeSlice
  },
});
