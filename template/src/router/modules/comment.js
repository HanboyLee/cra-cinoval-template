import React from "react";
import WithComponent from "../lib/withComponent";
import CommentPageDemo from "@/views/CommentDemos/CommentPageDemo";
import CommentPageDemo2 from "@/views/CommentDemos/CommentPageDemo2";
import CommentPageDemo3 from "@/views/CommentDemos/CommentPageDemo3";

export default {
	path: "/comments",
	children: [
		{
			// 默认到comments路径下
			index: true,
			element: (
				<WithComponent name="/comments">
					<CommentPageDemo />
				</WithComponent>
			),
		},
		{
			// 写成/comments/demo2也可
			path: "demo2",
			// element: withComponent(CommentPageDemo2, { name: "/comments/demo2" }),
			element: (
				<WithComponent name="/comments/demo2">
					<CommentPageDemo2 />
				</WithComponent>
			),
		},
		{
			path: "demo3",
			// element: withComponent(CommentPageDemo3, { name: "/comments/demo3" }),
			element: (
				<WithComponent name="/comments/demo3">
					<CommentPageDemo3 />
				</WithComponent>
			),
		},
	],
};
