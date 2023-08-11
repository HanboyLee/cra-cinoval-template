# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```
cinaval-template
├─ .editorconfig
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.js
├─ craco.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
└─ src 源代码文件夹
   ├─ api 网络请求代码,工具类函数和相关配置
   │  ├─ modules 细化每个模块的网络请求的文件
   │  │  └─ commentApiDemo.js 评论请求接口
   │  └─ request.js 拦截器
   ├─ App.js
   ├─ app.less
   ├─ assets 字体配置,全局常量,全局样式,iconfont以及一些静态资源
   │  ├─ constants 全局常量
   │  │  └─ index.js
   │  ├─ css
   │  │  └─ iconfont
   │  │     ├─ iconfont.css
   │  │     ├─ iconfont.js
   │  │     ├─ iconfont.json
   │  │     ├─ iconfont.ttf
   │  │     ├─ iconfont.woff
   │  │     └─ iconfont.woff2
   │  ├─ image
   │  │  └─ logo
   │  │     └─ avatar.gif
   │  └─ styles 全局样式
   │     ├─ globalStyles.js
   │     └─ themes.js
   ├─ components 可复用的UI组件(下面是个例子)
   │  ├─ commentDemo
   │    └─ Comment.js
   ├─ index.css
   ├─ index.js
   ├─ lang 国际化语言的工具包
   │  ├─ en.js 英文语言包
   │  ├─ index.js i18n的配置
   │  ├─ modules 细化到每一个模块的中英文文件
   │  │  ├─ charts
   │  │  ├─ en_public.js
   │  │  ├─ rules
   │  │  └─ zh_public.js
   │  └─ zh.js 中文语言包
   ├─ router 路由配置文件
   │  └─ index.js
   ├─ store  redux相关文件
   │  ├─ comments
   │  │  └─ comments.js
   │  └─ index.js
   ├─ utils  存放时间转换,验证等工具包
   │  ├─ dateHelper.js
   │  ├─ index.js
   │  └─ validate.js
   └─ views  页面文件 一般存放主页面 详情页面等
      ├─ ButtonDemos
      │  └─ ButtonDemo.js
      ├─ CommentDemos
      │  ├─ CommentPageDemo.js
      │  ├─ CommentPageDemo2.js
      │  └─ CommentPageDemo3.js
      ├─ index.js
      ├─ Layout
      │  ├─ index.js
      │  └─ Layout.js
      ├─ TestDemos
      │  └─ TestI18n.js
      └─ ViewTest
         ├─ ViewTest.js
         ├─ ViewTest2.js
         └─ ViewTest3.js

```
