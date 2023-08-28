import React from "react";

import { useRoutes } from "react-router-dom";
export { default as links } from "./links";

import WithComponent from "./lib/withComponent";
import Layout from "@/layout";
// const Layout = React.lazy(() => import("@/layout"));
const NotFound = React.lazy(() => import("@/views/NotFound"));
const NoPermission = React.lazy(() => import("@/views/NoPermission"));
import children from "./modules";
import { AliveScope } from "react-activation";
export const RoutePages = () => {
	const routers = useRoutes([
		{
			path: "",
			exact: true,
			element: (
				<AliveScope>
					<Layout />
				</AliveScope>
			),
			children,
		},
		{
			path: "/404",
			element: (
				<WithComponent>
					<NotFound />
				</WithComponent>
			),
		},
		{
			path: "/403",
			element: (
				<WithComponent>
					<NoPermission />
				</WithComponent>
			),
		},
	]);
	return routers;
};
