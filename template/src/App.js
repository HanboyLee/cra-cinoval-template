import React from "react";
// antd 国际化 只需在应用外围包裹一次即可全局生效
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutePages } from "./router";
import GlobalStyles from "./assets/styles/globalStyles";
import zhCN from "antd/lib/locale/zh_CN";
import { ThemeProvider, useTheme } from "styled-components";

import theme from "@/configs/theme";
import "./app.less";
const App = () => {
	const styledTheme = useTheme();
	return (
		<ConfigProvider locale={zhCN}>
			<ThemeProvider theme={{ ...styledTheme, ...theme }}>
				<Router>
					<RoutePages />
					<GlobalStyles />
				</Router>
			</ThemeProvider>
		</ConfigProvider>
	);
};

export default App;
