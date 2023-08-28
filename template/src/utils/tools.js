export default {
	generateUniqueID(length) {
		return Number(
			Math.random().toString().substr(3, length) + Date.now()
		).toString(36);
	},
	getMenuItemInMenuListByProperty(menuList, key, value) {
		let stack = [];
		stack = stack.concat(menuList);
		let res;
		while (stack.length) {
			let cur = stack.shift();
			if (cur.children && cur.children.length > 0) {
				stack = cur.children.concat(stack);
			}
			if (value === cur[key]) {
				res = cur;
			}
		}
		return res;
	},
};
