/**
 * 请注意如果修改或新增档案内容，请将档案同步至
 * src\assets\styles\themes\variables.less
 */

const MEDIA_SIZE = {
	desktop_1280_Inch: 1280,
	desktop_1440_Inch: 1440,
	desktop_1560_Inch: 1560,
	desktop_1920_Inch: 1920,
	desktop_2560_Inch: 2560,
};
module.exports = {
	primary_color: "#475DD8", // 全局主色
	primary_hover_color: "#536DFE", // 全局hover主色
	primary_selected_color: "#3B4DB4", // 全局selected主色
	dis_primary_color: "rgba(181, 199, 255, 1)", // 禁用全局主色
	header_bg_color: "#37474F", // header背景
	header_hover_color: "#445963", // header栏悬浮
	header_selected_color: "#2B383F", // header栏选中
	header_split_color: "#526A76", // header分割线
	common_bg_color: "#D9E0E3", // 通用栏背景
	common_selected_color: "#607D8B", // 通用栏选中
	common_hover_color: "#37474F", // 通用栏悬浮
	common_split_color: "#37474F", // 通用栏分割线
	common_inputStroke_Color: "#8B8B8B", // 通用栏 输入框描边
	primary_bg_color: "#F3F3F3", // 主背景/ 主内容区域悬浮
	primary_container_color: "#FFFFFF", // 主内容区域底色
	primary_containerStroke_color: "#EFF2F3", // 主内容区域描边
	containerStroke_color: "#E7E7E7", // 内容区域分割线
	sider_menu_bg_color: "#D9E0E3", // 侧边栏背景
	sider_menu_selected_color: "#607D8B", // 侧边栏选中
	sider_menu_hover_color: "#ACC9DB", // 侧边栏悬浮
	sider_menu_text_color: "#000", // 侧边菜单文字颜色
	sider_menu_selected_text_color: "#fff", // 侧边栏选中文字颜色

	// 文字
	//----黑色
	primary_block_text_color: "rgba(0, 0, 0, 0.9)", // 主文本色
	normal_block_text_color: "rgba(0, 0, 0, 0.6)", //常规文字
	sub_block_text_color: "rgba(0, 0, 0, 0.4)", //常规文字
	fail_block_text_color: "rgba(0, 0, 0, 0.26)", //常规文字
	//----白色
	primary_white_text_color: "rgba(255, 255, 255, 0.9)", // 主文本色
	normal_white_text_color: "rgba(255, 255, 255, 0.55)", //常规文字
	sub_white_text_color: "	rgba(255, 255, 255, 0.35)", //常规文字
	fail_white_text_color: "rgba(255, 255, 255, 0.26)", //常规文字
	fontSize_base: "1rem", // 主字号
	fontSize_base_sub: "0.9rem", // 次字号
	fontSize_base_small: "0.8rem", // 最小字号
	fontSize_Title_1: "2rem", // 标题字号1
	fontSize_Title_2: "1.5rem", // 标题字号2
	fontSize_Title_3: "1.25rem", // 标题字号3

	// 系统色
	link_color: "#1890ff", // 链接色
	success_color: "rgba(43, 164, 113, 1)", // 成功色
	dis_success_color: "rgba(181, 199, 255, 1)", // 禁用成功色

	warning_color: "rgba(227, 115, 24, 1)", // 警告色
	dis_warning_color: "rgba(255, 185, 140, 1)", // 禁用警 告色

	error_color: "rgba(213, 73, 65, 1)", // 错误色
	dis_error_color: "rgba(255, 185, 176, 1)", // 错误色

	disabled_color: "rgba(0, 0, 0, 0.26)", //失效色

	disabled_primary_button_color: "rgba(238, 238, 238, 1)", //主内容区域禁用按钮颜色

	//其他样式
	borderRadiusBase: "3px", // 组件/浮层圆角
	border_color_base: "#d9d9d9", // 边框色
	boxshadowBase: "1px 1px 3px #383838", // 浮层阴影

	//media query
	media1280: `(min-width: ${MEDIA_SIZE.desktop_1280_Inch}px)`,
	media1440: `(min-width: ${MEDIA_SIZE.desktop_1440_Inch}px)`,
	media1560: `(min-width: ${MEDIA_SIZE.desktop_1560_Inch}px)`,
	media1920: `(min-width: ${MEDIA_SIZE.desktop_1920_Inch}px)`,
	media2560: `(min-width: ${MEDIA_SIZE.desktop_2560_Inch}px)`,
	MEDIA_SIZE,
};
