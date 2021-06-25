import React from 'react';						
import Donation from './Blog/donation';
import Master from './HomePage/master';
import Donate from './Donation/Donate';

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