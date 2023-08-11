import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left{
    border:none

  }
.ant-menu-root{
     /* background: black; */

  }
  .ant-menu-sub.ant-menu-inline{
	/* background-color: rgb(25, 129, 177); */
	/* background: black; */
  }
  .ant-menu-vertical.ant-menu-sub{
	/* background: black; */
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    /* background: black; */
}
.ant-menu-item a {
    /* color: rgba(0,0,0,.85); */
}
  }
`;
export default GlobalStyles;
