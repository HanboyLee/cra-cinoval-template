import { createSlice } from '@reduxjs/toolkit';
import { getCommentsApi } from '@/api/modules/commentApiDemo';
export const initialState = {
  loading: false,
  hasErrors: false,
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCommentsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});
export const { getComments, getCommentsSuccess, getCommentsFailure } =
  commentsSlice.actions;
//   让我们的组件从redux的store状态树中提取它需要的任何数据
export const commentsSelector = (state) => state.comments;
export default commentsSlice.reducer;

export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      getCommentsApi({ postId }).then((res) => {
        dispatch(getCommentsSuccess(res));
      });
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
}
