import WithComponent from "../lib/withComponent";
import React from "react";
import TestI18n from "@/views/TestDemos/TestI18n";
// const TestI18n = React.lazy(() => import("@/views/TestDemos/TestI18n"));

export default {
	path: "/i18nText",
	// element: withComponent(TestI18n, { name: "/i18nText" }),
	element: (
		<WithComponent name="/i18nText">
			<TestI18n />
		</WithComponent>
	),
};
