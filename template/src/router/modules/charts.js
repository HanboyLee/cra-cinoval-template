import React from "react";
import WithComponent from "../lib/withComponent";
// const HeatMap = React.lazy(() => import("@/views/Charts/HeatMap/index"));
import HeatMap from "@/views/Charts/HeatMap";
export default {
	path: "/charts",
	children: [
		{
			path: "heatMap",
			element: (
				<WithComponent name="/charts/heatMap">
					<HeatMap />
				</WithComponent>
			),
		},
	],
};
