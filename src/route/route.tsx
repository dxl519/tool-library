import Index from '@/pages/index/index';
import { useLayoutEffect } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useLocation, useRoutes } from 'react-router-dom';


const routes: RouteObject[] = [{
	path: '/',
	element: <Index />,
}];

export default () => {
	const location = useLocation();
	const pathname = location.pathname;
	console.log(location)
	useLayoutEffect(() => {
		document.body.className =
			pathname.substring(1).replace(/\//gi, '_') + '_screen';
	}, [pathname]);
	return useRoutes(routes);
};
