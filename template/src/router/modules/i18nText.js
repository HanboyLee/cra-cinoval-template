import withComponent from '../lib/withComponent'
import React from 'react'
const TestI18n = React.lazy(() => import('@/views/TestDemos/TestI18n'));


export default  {
	path: '/i18nText',
	element: withComponent(TestI18n),
  }
