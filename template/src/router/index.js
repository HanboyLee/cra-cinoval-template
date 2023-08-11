import React from 'react';
import {
	BranchesOutlined,
	ApartmentOutlined,
	AuditOutlined,
} from '@ant-design/icons';
import { useRoutes } from 'react-router-dom';

export const links = [
	{
		key: '1',
		to: '',
		label: '首页',
		icon: <BranchesOutlined />,
	},
	{
		key: '2',
		// to: '/comments',
		label: 'reduxDemo',
		icon: <AuditOutlined />,
		children: [
			{
				key: '2.1',
				to: '/comments',
				label: 'commentDemo',
				icon: <BranchesOutlined />,
			},
			{
				key: '2.2',
				// 不能写成demo2
				to: '/comments/demo2',
				label: 'commentDemo2',
				icon: <BranchesOutlined />,
			},
			{
				key: '2.3',
				to: '/comments/demo3',
				label: 'commentDemo3',
				icon: <BranchesOutlined />,
			},
		],
	},
	{
		key: '3',
		to: '/i18nText',
		label: '国际化Demo',
		icon: <ApartmentOutlined />,
	},
	{
		key: '4',
		label: '页面测试',
		icon: <BranchesOutlined />,
		children: [
			{
				key: '4.1',
				to: '/viewTest',
				label: 'viewTest',
				icon: <BranchesOutlined />,
			},
			{
				key: '4.2',
				to: '/viewTest/viewTest2',
				label: 'viewTest2',
				icon: <BranchesOutlined />,
			},
		],
	},
];

import withComponent from './lib/withComponent';
const Layout = React.lazy(() => import('@/layout'));
const NotFound = React.lazy(()=>import('@/views/NotFound'))
const NoPermission = React.lazy(()=>import('@/views/NoPermission'))
import children from './modules';
export const RoutePages = () => {
	const routers = useRoutes([
		{
			path: '',
			exact: true,
			element: withComponent(Layout),
			children,
		},
		{
			path:'/404',
			element:withComponent(NotFound)
		},
		{
			path:'/403',
			element:withComponent(NoPermission)
		}
	]);
	return routers;
};
