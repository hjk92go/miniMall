import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productBox";

//스토어 생성
export default configureStore({
  reducer: { productBox: productSlice },
});
