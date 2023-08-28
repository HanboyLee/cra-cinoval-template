import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TagList from "./TagList";

const TagsView = (props) => {
	const setting = useSelector((state) => state.setting);

	return (
		<TagContainer
			tagbarIncreaseWidth={setting.collapsedWidth}
			collapsedWidth={setting.collapsedWidth}
		>
			<TagList {...props} />
		</TagContainer>
	);
};

const TagContainer = styled.div`
	white-space: nowrap;
	width: calc(100% - ${({ collapsedWidth }) => collapsedWidth}px);
	height: 50px;
	line-height: 50px;
	.tags-wrap {
		padding: 0;
		transform: rotate(90deg) translateX(100%);
		transform-origin: right top;

		& > li {
			display: inline-block;
			height: 100%;
		}
	}

	.scrollbar-container {
		z-index: 1000;
		height: calc(60vw + ${({ tagbarIncreaseWidth }) => tagbarIncreaseWidth}px);
		width: 70px;

		transform: rotate(-90deg) translateY(-70px);
		transform-origin: right top;
		transition: transform 0.1s ease-in-out;
		overflow: scroll;

		margin-bottom: 0px !important;
		::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}

		::-webkit-scrollbar-thumb {
			background: rgba(80, 115, 234, 0.5);
			border-radius: 5px;
			transition: all 0.5s 2s ease-in-out;
		}
	}
	.scrollbar-track-vertical {
		visibility: hidden !important;
	}
	.track-horizontal {
		overflow-x: scroll;
		width: 200px;
		background: #f0f;
	}
	.contextmenu {
		margin: 0;
		background: #fff;
		z-index: 3000;
		position: absolute;
		list-style-type: none;
		padding: 5px 0;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 400;
		color: #333;
		box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
		li {
			margin: 0;
			padding: 0px 16px;
			height: 30px;
			line-height: 30px;
			cursor: pointer;
			&:hover {
				background: #eee;
			}
		}
	}
`;

export default TagsView;
