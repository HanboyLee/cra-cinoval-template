import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_HOME } from "@/configs/constant";

export const initialState = {
	taglist: [{ to: "/", label: "首页" }],
};

const tagViewSlice = createSlice({
	name: "tagView",
	initialState,
	reducers: {
		addTagView: (state, { payload }) => {
			if (state.taglist.some((d) => d.to === payload.to)) {
				return state;
			}
			return {
				...state,
				taglist: [...state.taglist, payload],
			};
		},
		deleteTagView: (state, { payload }) => {
			return {
				...state,
				taglist: [...state.taglist.filter((item) => item.to !== payload.to)],
			};
		},
		emptyTagViewList: (state) => {
			const defaultHome = "/";
			return {
				...state,
				taglist: [...state.taglist.filter((item) => item.to === defaultHome)],
			};
		},
		closeOtherTagView: (state, { payload }) => {
			const defaultHome = "/";
			return {
				...state,
				taglist: [
					...state.taglist.filter((item) => {
						return item.to === defaultHome || item.to === payload.to;
					}),
				],
			};
		},
	},
});

export const {
	addTagView,
	deleteTagView,
	emptyTagViewList,
	closeOtherTagView,
} = tagViewSlice.actions;

export default tagViewSlice.reducer;
