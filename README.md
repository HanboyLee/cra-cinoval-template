#cra-template-cinoval
---
这是一个React模版

##**立即使用**
运行以下命令，一键生成 React 项目：

```
yarn create react-app [name of app/location] --template cra-template-cinoval
```
##**注意**
 > `npx` 方式暂时有问题，推荐 `yarn create`。
  ```sh
	Installing template dependencies using npm...
	npm ERR! code ERESOLVE
	npm ERR! ERESOLVE unable to resolve dependency tree
	npm ERR!
	npm ERR! While resolving: my-app@0.1.0
	npm ERR! Found: react-scripts@5.0.1
	npm ERR! node_modules/react-scripts
	npm ERR!   react-scripts@"5.0.1" from the root project
	npm ERR!
	npm ERR! Could not resolve dependency:
	npm ERR! peer react-scripts@"^4.0.0" from @craco/craco@6.4.5
	npm ERR! node_modules/@craco/craco
	npm ERR!   @craco/craco@"^6.4.5" from the root project
	npm ERR!
	npm ERR! Fix the upstream dependency conflict, or retry
	npm ERR! this command with --force, or --legacy-peer-deps
	npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
	npm ERR!
	npm ERR! See C:\Users\Administrator\AppData\Local\npm-cache\eresolve-report.txt for a full report.

	npm ERR! A complete log of this run can be found in:
	npm ERR!     C:\Users\Administrator\AppData\Local\npm-cache\_logs\2023-08-15T01_40_59_131Z-debug.log
	`npm install --no-audit --save @ant-design/icons@^4.7.0 @craco/craco@^6.4.5 @csstools/normalize.css@^12.0.0 @reduxjs/toolkit@^1.8.6 @testing-library/jest-dom@^5.16.5 @testing-library/react@^13.4.0 @testing-library/user-event@^13.5.0 ahooks@^3.7.8 animate.css@^4.1.1 antd@^4.23.6 axios@^1.1.3 craco@^0.0.3 craco-less@^2.0.0 d3@^7.6.1 echarts@^5.4.0 i18n-react@^0.7.0 i18next@^21.10.0 i18next-browser-languagedetector@^6.1.8 i18next-http-backend@^1.4.4 less-loader@^11.1.0 lodash@^4.17.21 moment@^2.29.4 nprogress@^0.2.0 react@^18.2.0 react-dom@^18.2.0 react-i18next@^11.18.6 react-redux@^8.0.4 react-router-dom@^6.4.2 react-scripts@5.0.1 redux-persist@^6.0.0 sass@^1.55.0 sass-loader@^13.1.0 styled-components@^5.3.6 web-vitals@^2.1.4` failed
  ```
##疑问
1. **为什么使用style-components?**
	- 組件化樣式: 使你能夠將CSS直接與React組件相結合，確保樣式與組件邏輯高度一致。
	- 動態樣式: 可以根據組件的props動態生成樣式，這讓你能更輕鬆地根據狀態或屬性改變樣式。
	- 主題支援: 通過主題提供者，你可以輕鬆共享樣式變數，使整個應用程序具有一致的外觀。
	- 自動供應商前綴: 透過自動添加瀏覽器供應商前綴，增強了跨瀏覽器的兼容性。
   - 開發體驗: styled-components支援熱重載和有助於調試的有意義的類名，讓開發過程更為順暢。
<br>
2. **为什么使用craco?**
	- 配置靈活性: 與直接使用CRA相比，craco允許你自定義Webpack和Babel的配置，增加了設置和插件的靈活性。
	- 無需eject: CRA的eject操作會暴露所有內部配置，但這是一個不可逆的過程。使用craco則可以在不進行eject的情況下進行自定義配置。
	- 維護簡便: 避免直接修改內部配置，使未來升級CRA版本時更加平滑，不需要重新調整配置。
	- 插件生態: craco擁有一個活躍的插件生態系統，讓你能更容易地整合和使用第三方庫和工具。
	- 社區支持: 有了良好的文檔和社區支持，使用craco變得更加直觀和方便。

