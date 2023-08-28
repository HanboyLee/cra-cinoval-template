import React from "react";
import { tools } from "@/utils";
import {
	BranchesOutlined,
	ApartmentOutlined,
	AuditOutlined,
} from "@ant-design/icons";
export default [
	{
		key: tools.generateUniqueID(),
		to: "/",
		label: "首页",
		icon: <BranchesOutlined />,
	},
	{
		key: tools.generateUniqueID(),
		label: "reduxDemo",
		icon: <AuditOutlined />,
		children: [
			{
				key: tools.generateUniqueID(),
				to: "/comments",
				label: "commentDemo",
				icon: <BranchesOutlined />,
			},
			{
				key: tools.generateUniqueID(),
				// 不能写成demo2
				to: "/comments/demo2",
				label: "commentDemo2",
				icon: <BranchesOutlined />,
			},
			{
				key: tools.generateUniqueID(),
				to: "/comments/demo3",
				label: "commentDemo3",
				icon: <BranchesOutlined />,
			},
		],
	},
	{
		key: tools.generateUniqueID(),
		to: "/i18nText",
		label: "国际化Demo",
		icon: <ApartmentOutlined />,
	},
	{
		key: tools.generateUniqueID(),
		label: "页面测试",
		icon: <BranchesOutlined />,
		children: [
			{
				key: tools.generateUniqueID(),
				to: "/viewTest",
				label: "viewTest",
				icon: <BranchesOutlined />,
			},
			{
				key: tools.generateUniqueID(),
				to: "/viewTest/viewTest2",
				label: "viewTest2",
				icon: <BranchesOutlined />,
			},
		],
	},
	{
		key: tools.generateUniqueID(),
		label: "图表",
		icon: <BranchesOutlined />,
		children: [
			{
				key: tools.generateUniqueID(),
				to: "/charts/heatMap",
				label: "热力图表",
				icon: <ApartmentOutlined />,
			},
		],
	},
];
