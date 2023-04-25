const addCart = createSlice({
  name: "cart",
  initialState: { text: "", count: 0 },
  reducers: {
    add: (state, action) => {
      state.text = action.payload;
    },
    count: (state, action) => {
      state.count++;
    },
  },
});

export const { add, count } = store.actions;
export default configureStore({ reducer: store.reducer });
