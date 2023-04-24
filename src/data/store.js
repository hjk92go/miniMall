import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productBox";
//스토어 생성
const store = configureStore({
  reducer: {
    productBox: productSlice.reducer,
  },
});
export default store;
