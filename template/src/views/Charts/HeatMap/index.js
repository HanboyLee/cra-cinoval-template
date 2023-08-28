import React from "react";
import * as echart from "echarts";
import styled from "styled-components";
import {
	series11,
	series12,
	series0,
	dtlData,
	bsLine,
	bsLineV,
	sbsLineV,
	color,
} from "./config";

const HeatMap = () => {
	const canvasRef = React.useRef(null);
	const containerRef = React.useRef(null);
	const formatUtil = echart.format;

	const option = React.useMemo(
		() => ({
			tooltip: {
				formatter: function (info) {
					let value = info.value;
					let treePathInfo = info.treePathInfo;
					let treePath = [];

					for (let i = 1; i < treePathInfo.length; i++) {
						treePath.push(treePathInfo[i].name);
					}

					return [
						'<div class="tooltip-title">' +
							formatUtil.encodeHTML(treePath.join(" - ")) +
							"</div>",
						"Table Count: " + formatUtil.addCommas(value),
					].join("");
				},
			},
			grid: {
				bottom: "10%",
				height: "100%",
			},
			title: {
				text: "数据分布",
				left: "center",
			},
			toolbox: {
				show: true,
				feature: {
					saveAsImage: {},
					restore: {},
					dataView: {},
				},
			},
			visualMap: {
				min: 0,
				max: 1000,
				calculable: true,
				orient: "horizontal",
				left: "10%",
				top: "0%",
			},
			series: [series0],
		}),
		[series0]
	);

	const eventListener = () => {
		myChartRef.current.resize();
	};

	React.useEffect(() => {
		if (
			containerRef.current !== null &&
			containerRef.current !== "" &&
			containerRef.current !== undefined
		) {
			containerRef.current.dispose();
		}
		const mainContent = document.querySelector("main.ant-layout-content");
		if (mainContent && canvasRef?.current) {
			// const { height, width } = mainContent.getBoundingClientRect();

			containerRef.current = echart.init(canvasRef.current);
			window.addEventListener("resize", eventListener);
			containerRef.current.setOption(option);
			// 点击事件
			containerRef.current.on("click", function (param) {
				console.log(param);
				let bsColor = "";
				let selectedItem = param.name;
				//alert(selectedItem);

				// for (let key in dtlData) {
				// 	console.log(dtlData[key].name, selectedItem);
				// 	if (dtlData[key].name === selectedItem) {
				// 		for (let ki in sbsLineV) {
				// 			if (sbsLineV[ki] === selectedItem) {
				// 				bsColor = color[ki];
				// 			}
				// 		}
				// 		series12.levels[1].color = [bsColor];
				// 		series12.data = [dtlData[key]];
				// 		option.series = [series11, series12];
				// 		containerRef.current.setOption(option, true);
				// 	}
				// }

				// console.log(bsLine, "bsLine", selectedItem, sbsLineV);
				// if (bsLine.indexOf(selectedItem) < 0) {
				// 	option.series = [series0];
				// 	containerRef.current.setOption(option, true);
				// }
			});
		}
		return () => {
			window.removeEventListener("resize", eventListener);
		};
	}, []);

	return (
		<div
			style={{ width: "1000px", height: "700px" }}
			className="content"
			ref={canvasRef}
		></div>
	);
};

export default HeatMap;
