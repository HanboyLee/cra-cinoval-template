import React from 'react';

import { Layout, Menu, Typography } from 'antd';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { links } from '@/router';
//Outlet将其用于父组件中可以为子路由的元素占位，并最终渲染子路由的元素
import { NavLink, Outlet } from 'react-router-dom';
import { themeConstant } from '@/assets/constants';
const { Header, Content, Sider } = Layout;

function getItem({ label, key, icon, children, to }) {
	return {
		key,
		icon,
		children: children?.length ? children.map((d) => getItem(d)) : null,
		label: (
			<NavLink to={to} className="menuItem">
				{label}
			</NavLink>
		),
	};
}

const menuItems = links.map((d) => getItem(d));

const LayoutStyle = () => {
	const title = process.env.REACT_APP_TITLE;
	const [collapsed, setCollapsed] = React.useState(false);
	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Header
				className="site-layout-background"
				style={{
					padding: 0,
					margin: 0,
				}}
			>
				<Typography.Title style={{ color: 'Highlight' }}>
					{title}
				</Typography.Title>
			</Header>
			<Layout>
				<CustomMenu
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<Menus
						defaultSelectedKeys={['1']}
						mode="inline"
						items={menuItems}
					/>
				</CustomMenu>

				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutStyle;

const CustomMenu = styled(Sider)``;
const Menus = styled(Menu)`
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
