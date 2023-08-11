import React from 'react'

const  withComponent = (Com) =>{
	return (
	  <React.Suspense fallback={'Loading...'}>
		<Com />
	  </React.Suspense>
	);
  }

  export default withComponent
