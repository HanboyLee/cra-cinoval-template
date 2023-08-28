import React from "react";

import { Layout, Menu, Typography } from "antd";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { links } from "@/router";
//Outlet将其用于父组件中可以为子路由的元素占位，并最终渲染子路由的元素
import { Outlet } from "react-router-dom";
import { themeConstant } from "@/assets/constants";
import { styleConfig } from "./configs";
import { useSelector } from "react-redux";

const { Header, Content } = Layout;

//components
import MenuView from "./MenuView";
import Tagview from "./Tagview";

const LayoutStyle = () => {
	const title = process.env.REACT_APP_TITLE;
	const setting = useSelector((state) => state.setting);
	const [currentKey, setCurrentKey] = React.useState("");
	return (
		<Layout
			style={{
				minHeight: styleConfig.global.height,
			}}
		>
			<Header
				className="site-layout-background"
				style={{
					padding: 0,
					margin: 0,
					height: styleConfig.header.height,
				}}
			>
				<Typography.Title
					style={{ height: "100%", color: "Highlight", padding: 0, margin: 0 }}
				>
					{title}
				</Typography.Title>
			</Header>
			<Layout>
				<MenuView currentKey={currentKey} setCurrentKey={setCurrentKey} />

				<Content
					style={{
						width: `calc(100% - ${setting.collapsedWidth}px)`,
						height: styleConfig.main.heigth,
					}}
				>
					<TagListContainer>
						<Tagview setCurrentKey={setCurrentKey} />
					</TagListContainer>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutStyle;

const TagListContainer = styled.div`
	margin-left: 10px;
	width: calc(100% - 10px);
`;
