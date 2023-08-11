import React from 'react'
import withComponent from '../lib/withComponent'
const ViewTest2 = React.lazy(() => import('@/views/ViewTest/ViewTest2'));
const ViewTest3 = React.lazy(() => import('@/views/ViewTest/ViewTest3'));
export default  {
	path: '/viewTest',
	children: [
	  {
		path: '',
		element: withComponent(ViewTest2),
	  },
	  {
		path: '/viewTest/viewTest2',
		element: withComponent(ViewTest3),
	  },
	],
  }
