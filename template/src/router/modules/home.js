
import React from 'react'
import withComponent from '../lib/withComponent'
const ButtonDemo = React.lazy(() =>
  import('@/views/ButtonDemos/ButtonDemo')
);
export default {
	index: true,
	path: '',
	element: withComponent(ButtonDemo),
  }
