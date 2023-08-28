import React from "react";
import WithComponent from "../lib/withComponent";
import ButtonDemo from "@/views/ButtonDemos/ButtonDemo";
// const ButtonDemo = React.lazy(() => import("@/views/ButtonDemos/ButtonDemo"));
export default {
	index: true,
	path: "/",
	// element: WithComponent(ButtonDemo, "/"),
	element: (
		<WithComponent name="/">
			<ButtonDemo />
		</WithComponent>
	),
};
