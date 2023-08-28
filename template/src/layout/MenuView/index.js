import React from "react";
import { NavLink } from "react-router-dom";
import * as A from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCollapsed } from "@/store/setting/settingSlice";
import { addTagView } from "@/store/tagView/tagViewSlice";
import { links } from "@/router";
import styled from "styled-components";
import { themeConstant } from "@/assets/constants";
// tools
import { tools } from "@/utils";

function menuItemHandle({ resourceUrl, label }) {
	//   正常路由
	if (resourceUrl) {
		return (
			<NavLink to={resourceUrl} className="menuItem">
				{label}
			</NavLink>
		);
	}

	//   父级路由
	return label;
}

function getItem({ label, key, icon, children, to }) {
	return {
		key,
		icon,
		children: children?.length ? children.map((d) => getItem(d)) : null,
		label: menuItemHandle({ resourceUrl: to, label }),
	};
}

function getTag({ label, key, to, children, fontIcon }) {
	return {
		key,
		label,
		to,
		icon: fontIcon ?? "",
		children: children?.length ? children.map((d) => getTag(d)) : null,
	};
}

const menuItems = links.map((d) => getItem(d));

const MenuView = ({ setCurrentKey }) => {
	const dispatch = useDispatch();
	const setting = useSelector((state) => state.setting);
	const handleMenuSelect = ({ key }) => {
		setCurrentKey(key);
		const tagList = links?.map((d) => getTag(d));
		const tagItem = tools.getMenuItemInMenuListByProperty(tagList, "key", key);
		dispatch(addTagView(tagItem));
	};

	return (
		<CustomMenu
			collapsible
			collapsed={setting.isCollapsed}
			onCollapse={(value) => dispatch(setCollapsed(value))}
		>
			<MenuSet
				onSelect={handleMenuSelect}
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={menuItems}
			/>
		</CustomMenu>
	);
};

const CustomMenu = styled(A.Layout.Sider)``;

const MenuSet = styled(A.Menu)`
	.ant-menu-item-selected {
		background-color: #ccc !important;
	}
	/* .ant-menu-inline .ant-menu-item::after */
	.ant-menu-item::after {
		border-right: none;
	}
	.ant-menu-submenu-selected {
		color: #000;
	}
	a {
		color: #000;
	}
	.ant-menu-item-selected a,
	.ant-menu-item-selected a:hover {
		color: ${({ theme }) => theme[themeConstant.primaryColor]};
	}
`;
export default MenuView;
