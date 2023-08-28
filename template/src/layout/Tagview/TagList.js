import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Tag } from "antd";
import clsx from "clsx";
import { useAliveController } from "react-activation";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// redux
import {
	deleteTagView,
	emptyTagViewList,
	closeOtherTagView,
} from "@/store/tagView/tagViewSlice";
// configs

const TagList = ({ setCurrentKey }) => {
	const defaultHome = "/";

	// 页面缓存
	const {
		drop: aliveDrop,
		refresh: aliveRefresh,
		clear: aliveClear,
	} = useAliveController();

	const dispatch = useDispatch();
	const { taglist } = useSelector((state) => state.tagView);
	const location = useLocation();
	const navigate = useNavigate();
	const tagListContainer = React.useRef(null);
	const contextMenuContainer = React.useRef(null);

	const [left, setLeft] = React.useState(0);
	const [top, setTop] = React.useState(0);
	const [menuVisible, setMenuVisible] = React.useState(false);
	const [currentTag, setCurrentTag] = React.useState(null);

	const handleClose = (tag) => {
		console.log(tag, "tag");
		const path = tag.to;
		const currentPath = location.pathname;
		const length = taglist.length;

		// 如果关闭的是当前页，跳转到最后一个tag
		if (path === currentPath) {
			navigate(taglist[length - 1].to);
			setCurrentKey(taglist[length - 1].key);
		}
		// 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
		if (
			path === taglist[length - 1].to &&
			currentPath === taglist[length - 1].to
		) {
			// 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
			if (length - 2 > 0) {
				navigate(taglist[length - 2].to);
				setCurrentKey(taglist[length - 2].key);
			} else if (length === 2) {
				navigate(taglist[0].to);
				setCurrentKey(taglist[0].key);
			}
		}

		// 先跳转路由，再修改state树的taglist
		dispatch(deleteTagView(tag));
		console.log(taglist, path);
		// 关闭页面缓存
		aliveDrop(path);
	};
	const handleClick = (tag) => {
		setCurrentKey(tag.key);
		navigate(tag.to);
	};
	const openContextMenu = React.useCallback((tag, event) => {
		event.preventDefault();
		const menuMinWidth = 105;
		const clickX = event.clientX;
		const clickY = event.clientY; //事件发生时鼠标的Y坐标
		const clientWidth = tagListContainer.current.clientWidth; // container width
		const maxLeft = clientWidth - menuMinWidth; // left boundary

		// console.log(clickX, clickY, clientWidth, maxLeft);
		// 当鼠标点击位置大于左侧边界时，说明鼠标点击的位置偏右，将菜单放在左边
		if (clickX > maxLeft) {
			setLeft(clickX - menuMinWidth + 15);
			setTop(clickY);
			setMenuVisible(true);
			setCurrentTag(tag);
		} else {
			// 反之，当鼠标点击的位置偏左，将菜单放在右边
			setLeft(clickX);
			setTop(clickY);
			setMenuVisible(true);
			setCurrentTag(tag);
		}
	}, []);
	const closeContextMenu = () => {
		setMenuVisible(false);
	};

	const handleClickOutside = (event) => {
		const isOutside = !(
			contextMenuContainer.current &&
			contextMenuContainer.current.contains(event.target)
		);
		if (isOutside && menuVisible) {
			closeContextMenu();
		}
	};

	const handleCloseAllTags = () => {
		dispatch(emptyTagViewList());
		const tag = taglist[0];
		setCurrentKey(tag.key);
		navigate(defaultHome);
		closeContextMenu();
		// 清除页面全部缓存
		aliveClear();
	};
	const handleCloseOtherTags = () => {
		const { to: path, key } = currentTag;

		dispatch(closeOtherTagView(currentTag));
		setCurrentKey(key);
		navigate(path);
		closeContextMenu();
		// 清除页面全部缓存
		aliveClear();
	};

	const handleRefreshTag = () => {
		const { to: path } = currentTag;
		closeContextMenu();
		// 重新刷新页面
		aliveRefresh(path);
	};

	React.useEffect(() => {
		document.body.addEventListener("click", handleClickOutside, false);
		return () =>
			document.body.removeEventListener("click", handleClickOutside, false);
	}, [menuVisible]);

	const currentPath = location.pathname;
	return (
		<>
			<Scrollbars
				autoHide
				autoHideTimeout={1000}
				autoHideDuration={200}
				hideTracksWhenNotNeeded={true}
				renderView={(props) => (
					<div {...props} className="scrollbar-container" />
				)}
				renderTrackHorizontal={(props) => (
					<div {...props} className="track-horizontal" />
				)}
				renderTrackVertical={(props) => (
					<div {...props} className="scrollbar-track-vertical" />
				)}
			>
				<ul className="tags-wrap" ref={tagListContainer}>
					{taglist.map((tag) => {
						return (
							<li key={tag.to}>
								<TagItem
									onClose={() => handleClose(tag)}
									closable={tag.to !== defaultHome}
									className={clsx({ selectedTag: currentPath === tag.to })}
									onClick={() => handleClick(tag)}
									onContextMenu={(e) => openContextMenu(tag, e)}
								>
									{tag.label}
								</TagItem>
							</li>
						);
					})}
				</ul>
			</Scrollbars>
			{menuVisible ? (
				<ul
					className="contextmenu"
					style={{ left: `${left + 105}px`, top: `${top}px` }}
					ref={contextMenuContainer}
				>
					{/* 关闭其他 */}
					<li onClick={handleCloseOtherTags}>关闭其他</li>
					{/* 关闭所有 */}
					<li onClick={handleCloseAllTags}>关闭所有</li>
					{/* 刷新页面 */}
					<li onClick={handleRefreshTag}>刷新页面</li>
				</ul>
			) : null}
		</>
	);
};
export default TagList;

const TagItem = styled(Tag)`
	font-size: 14px;
	vertical-align: middle;
	color: ${({ theme }) => theme.primary_white_text_color};
	user-select: none;
	border-radius: ${({ theme }) => theme.borderRadiusBase};
	border: unset;
	cursor: pointer;
	background: ${({ theme }) => theme.header_hover_color};
	padding: 3px 5px;
	& .anticon-close {
		color: ${({ theme }) => theme.primary_white_text_color};
		transition: all 0.3s ease;
		&:hover {
			color: ${({ theme }) => theme.error_color};
			transform: scale(1.5);
			cursor: pointer;
		}
	}
	&:hover {
		border-radius: ${({ theme }) => theme.borderRadiusBase};
		color: ${({ theme }) => theme.primary_white_text_color};
		background-color: ${({ theme }) => theme.header_bg_color};
		font-weight: 600;
		transform: scale(1);
	}

	&.selectedTag {
		border-radius: ${({ theme }) => theme.borderRadiusBase};
		color: ${({ theme }) => theme.primary_white_text_color};
		background-color: ${({ theme }) => theme.header_selected_color};
		font-weight: 600;
		box-shadow: ${({ theme }) => theme.boxshadowBase};
	}
`;
