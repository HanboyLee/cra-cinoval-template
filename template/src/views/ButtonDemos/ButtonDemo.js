import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { themeConstant } from "@/assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { increment, counterSelector } from "@/store/counters/counterSlice";

function ButtonDemo() {
	const dispatch = useDispatch();
	const { count } = useSelector(counterSelector);
	return (
		<div>
			<ButtonExample>button</ButtonExample>
			<ButtonExample primary>button</ButtonExample>
			<div className="iconfont sinoval-gongsi" />
			<Button
				type="primary"
				onClick={() => {
					dispatch(increment());
				}}
			>
				primary Button(+++)
			</Button>
			<ButtonText> primaryColor Button</ButtonText>
			<h1>{count}</h1>
		</div>
	);
}

export default ButtonDemo;

// 默认属性传值预设
ButtonDemo.defaultProps = {
	color: "black",
};
// 传递属性的类别
ButtonDemo.propTypes = {
	// data:PropTypes.object,
};

const ButtonExample = styled.button`
	background: ${(props) => (props.primary ? "black" : "white")};
	color: ${(props) => (props.primary ? "white" : "black")};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
`;

// // 测试theme 有效
const ButtonText = styled.button`
	background-color: ${({ theme }) => theme[themeConstant.primaryColor]};
`;
