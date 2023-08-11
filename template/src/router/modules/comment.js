import React from 'react'
import withComponent from '../lib/withComponent'
const CommentPage = React.lazy(() =>
  import('@/views/CommentDemos/CommentPageDemo')
);
const CommentPage2 = React.lazy(() =>
  import('@/views/CommentDemos/CommentPageDemo2')
);
const CommentPage3 = React.lazy(() =>
  import('@/views/CommentDemos/CommentPageDemo3')
);



export default  {
	path: '/comments',
	children: [
	  {
		// 默认到comments路径下
		index:true,
		element: withComponent(CommentPage),
	  },
	  {
		// 写成/comments/demo2也可
		path: 'demo2',
		element: withComponent(CommentPage2),
	  },
	  {
		path: 'demo3',
		element: withComponent(CommentPage3),
	  },
	],
  }
