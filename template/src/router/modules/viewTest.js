import React from "react";
import WithComponent from "../lib/withComponent";
import ViewTest2 from "@/views/ViewTest/ViewTest2";
import ViewTest3 from "@/views/ViewTest/ViewTest3";

export default {
	path: "/viewTest",
	children: [
		{
			path: "",
			// element: withComponent(ViewTest2, { name: "/viewTest" }),
			element: (
				<WithComponent name="/viewTest">
					<ViewTest2 />
				</WithComponent>
			),
		},

		{
			path: "viewTest2",
			// element: withComponent(ViewTest3, { name: "/viewTest/viewTest2" }),
			element: (
				<WithComponent name="/viewTest/viewTest2">
					<ViewTest3 />
				</WithComponent>
			),
		},
	],
};
