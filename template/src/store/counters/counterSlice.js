import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    title: 'redux toolkit pre',
  },
  reducers: {
    increment(state) {
      state.count += 1; //内置了immutable 一旦创建，就不能再被更改
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
//   让我们的组件从redux的store状态树中提取它需要的任何数据
export const counterSelector = (state) => state.counter;

export default counterSlice.reducer;
