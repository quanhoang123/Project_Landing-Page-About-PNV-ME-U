import React from 'react';						
import Donate from './Donation/Donate';
import Master from './HomePage/master';

const routes = [						
	{					
		path : '/',				
		exact : true,				
		main : ()=> <Master />				
	},
	{					
		path : '/donate',				
		exact : true,				
		main : ()=> <Donate />				
	}
	
];						
						
						
export default routes;						