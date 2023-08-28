import React from "react";
import KeepAlive from "react-activation";

const WithComponent = ({ name, children } = {}) => {
	console.log(name, "name");
	if (!name) {
		return (
			<React.Suspense fallback={<>Loading..-.</>}>{children}</React.Suspense>
		);
	}

	return (
		<KeepAlive autoFreeze={false} id={name} name={name}>
			{children}
		</KeepAlive>
	);
};

export default WithComponent;
