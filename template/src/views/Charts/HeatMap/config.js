function createData(unitNames, childrenNames) {
	return unitNames.map((unitName) => {
		// 隨機選擇子項目名稱並生成value
		const children = Array.from({ length: 5 }, () => {
			const childName =
				childrenNames[Math.floor(Math.random() * childrenNames.length)];
			return {
				name: childName,
				value: Math.floor(Math.random() * 500), // 隨機生成子項目value
			};
		});

		const totalValue = children.reduce((sum, child) => sum + child.value, 0);

		return {
			name: unitName, // 使用單元名稱作為父項目名稱
			value: totalValue, // 父項目value等於所有子項目value的總和
			children: children,
		};
	});
}
const unitNames = [
	"生產單元A",
	"生產單元B",
	"裝配單元C",
	"檢測單元D",
	// 更多單元名稱
];

const childrenNames = [
	"PLC",
	"PID",
	"VFD",
	"RTD",
	"SCADA",
	"HMI",
	"DCS",
	"I/O",
	"MCC",
	"UPS",
	"EMI",
	"FPGA",
	"PWM",
	"ADC",
	"DAC",
	"CPU",
	"RAM",
	"ROM",
	"GUI",
	"LAN",
	"WAN",
	"VPN",
	"HTTP",
	"FTP",
	"TCP",
	"IP",
	"RFID",
	"ERP",
	"CAD",
	"CAM",
];
export const dtlData = createData(unitNames, childrenNames);
export const color = [
	"#c23531",
	"#2f4554",
	"#61a0a8",
	"#d48265",
	"#91c7ae",
	"#bda29a",
	"#ca8622",
	"#749f83",
	"#6e7074",
	"#546570",
	"#c4ccd3",
];

// 层级样式
function getLevelOption1() {
	return [
		{
			color: color,
			itemStyle: {
				borderWidth: 0,
				borderColor: "#777",
				gapWidth: 2,
			},
		},
		{
			colorSaturation: [0.35, 0.7],
			// colorAlpha: [1, 0.5],
			upperLabel: {
				color: "#000",
				show: true,
				height: 30,
			},
			itemStyle: {
				borderWidth: 5,
				borderColor: "#555",
				gapWidth: 1,
			},
			emphasis: {
				itemStyle: {
					borderColor: "#ccc",
				},
			},
		},
	];
}

function getLevelOption2() {
	return [
		{
			itemStyle: {
				borderWidth: 0,
				borderColor: "#fff",
				gapWidth: 2,
			},
		},
		{
			color: [],
			//colorSaturation: [0.35, 0.6],
			//colorAlpha: [0.5, 1],
			//colorMappingBy: 'value',
			upperLabel: {
				show: true,
				height: 30,
			},
			itemStyle: {
				borderWidth: 5,
				borderColor: "#555",
				gapWidth: 1,
			},
			emphasis: {
				itemStyle: {
					borderColor: "#ccc",
				},
			},
		},
	];
}

export const series0 = {
	name: "数据库",
	type: "treemap",
	itemStyle: {
		borderColor: "#fff",
	},
	levels: getLevelOption1(),
	leafDepth: 2,
	data: dtlData,
};

export const series11 = {
	name: "数据库",
	type: "treemap",
	itemStyle: {
		borderColor: "#fff",
	},
	right: "50%",
	width: "48%",
	levels: getLevelOption1(),
	leafDepth: 2,
	data: dtlData,
};

export const series12 = {
	name: "数据库",
	type: "treemap",
	itemStyle: {
		borderColor: "#fff",
	},
	left: "55%",
	width: "40%",
	levels: getLevelOption2(),
	leafDepth: 2,
	data: [dtlData[0]],
};

export let bsLine = [];
export let bsLineV = {};
for (let key in dtlData) {
	bsLine.push(dtlData[key].name);
	bsLineV[dtlData[key].name] = dtlData[key].value;
}
export let sbsLineV = Object.keys(bsLineV).sort(function (a, b) {
	return -(bsLineV[a] - bsLineV[b]);
});
