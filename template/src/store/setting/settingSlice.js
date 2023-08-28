import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	isCollapsed: false,
	collapsedWidth: 200,
	menus: [],
	pages: [],
};

const settingSlice = createSlice({
	name: "setting",
	initialState,
	reducers: {
		setCollapsed: (state, { payload }) => {
			return {
				...state,
				isCollapsed: payload,
				collapsedWidth: payload ? 80 : 200,
			};
		},
		setMenus: (state, { payload }) => {
			return { ...state, menus: payload };
		},
		setPages: (state, { payload }) => {
			return { ...state, pages: payload };
		},
	},
});
export const { setCollapsed, setMenus, setPages } = settingSlice.actions;

export default settingSlice.reducer;
