import React from "react";
import styled from "styled-components";
import errorImg from "@/assets/image/error/403.png";

import * as A from "antd";
import { useNavigate } from "react-router-dom";
const NoPermission = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true });
  };
  const goLogin = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <ErrorContainer
      style={{ backgroundImage: `url(${errorImg})` }}
      className="not-found-wrapper "
    >
      <div className="glitch-wrapper">
        <div className="glitch-text">
		当前您没有访问权限, 请联系管理员!
        </div>
      </div>
      <div className="content-wrapper">
        <div className="operate-item">
          <A.Button className="btn" size="mini" onClick={goHome}>
            <i className="iconfont sinoval-Building"></i>
            {/* 返回主看板 */}
            <span>返回主看板</span>
          </A.Button>
          <A.Button className="btn" size="mini" onClick={goLogin}>
            <i className="iconfont sinoval-ShareiOS"></i>
            {/*清理缓存试试  */}
            <span>清理缓存试试</span>
          </A.Button>
        </div>
      </div>
    </ErrorContainer>
  );
};

export default NoPermission;

const ErrorContainer = styled.div`
  overflow: hidden;
  margin: 0px;
  background: ${({ theme }) => theme.common_bg_color};
  height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  .glitch-wrapper {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    width: 100vw;
    text-align: center;
  }

  .glitch-text,
  button {
    font-family: monospace;
    font-weight: bold;
  }

  .glitch-text::before {
    content: "当前您没有访问权限, 请联系管理员!";
    color: black;
    text-shadow: 0px 0px 5px 10px black !important;
    filter: blur(4px);
    display: block;
    position: absolute;
    z-index: -1;
    font-size: 5rem;
    left: 10px;
    right: 0px;
    margin-top: -50px;
    opacity: 0.5;
  }

  .glitch-text {
    position: relative;
    z-index: 2;
    opacity: 0.9;
    margin: 0 auto;
    text-shadow: 0px 0px 3px white;
    animation: glitch 3s infinite;
    user-select: none;
    font-size: 3.25rem;
    color: ${({ theme }) => theme.primary_block_text_color};
  }

  .content-wrapper {
    width: 40vw;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
  }

  .operate-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  button {
    display: block;
    background: ${({ theme }) => theme.common_hover_color};
    border: 0px;
    padding: 7px;
    margin: 0 auto;
    color: ${({ theme }) => theme.primary_white_text_color};
    cursor: pointer;
    margin-top: 30px;
    font-size: 1rem;
    transition: 200ms;
    line-height: 1;
  }

  button:hover,
  button:focus,
  button:active {
    /* box-shadow: 0px 0px 3px 6px black; */
    text-shadow: 0px 0px 3px white;
    background: ${({ theme }) => theme.primary_color};
    color: white;
    transition: 200ms;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
