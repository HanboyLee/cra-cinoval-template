import { combineReducers, configureStore } from "@reduxjs/toolkit";
// persistStore 为redux-persist内置的状态管理仓库；
// persistReducer 为内置的切片管理；
import { persistStore, persistReducer } from "redux-persist";
// storage redux-persist的思想是将要存储的数据通过storage存储在本地localstorage中；
import storage from "redux-persist/lib/storage";
import commentsReducer from "./comments/comments";
//  不能写成 import counterSlice from './counters/counterSlice';
import counterReduer from "./counters/counterSlice";
import settingReducer from "./setting/settingSlice";
import tagViewReducer from "./tagView/tagViewSlice";

//配置要存储的Slice
const persistConfig = {
	key: "counter",
	storage: storage,
	//   blacklist: ['commentsReducer'], //设置某个reducer数据不持久化
};
//包装counterReduer
const myPersistReducer = persistReducer(persistConfig, counterReduer);

const tagViewPersistReducer = persistReducer(
	{
		key: "tagView",
		storage: storage,
		//   blacklist: ['commentsReducer'], //设置某个reducer数据不持久化
	},
	tagViewReducer
);

const rootReducer = combineReducers({
	comments: commentsReducer,
	counter: myPersistReducer,
	setting: settingReducer,
	tagView: tagViewPersistReducer,
});

//传递给createStore函数
const store = configureStore({
	reducer: rootReducer,
	// 解决报错:Warning A non-serializable value was detected in an action
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

// store对象 && 包裹store的persistStore都需导出
//包装store
export const persistor = persistStore(store);

export default store;
