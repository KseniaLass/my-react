'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if(!headers) {
	headers = ['Title', 'Year', 'Rating', 'Comments'];
	data = ['Test', '1959', '5', 'foo'];
}

ReactDOM.render(
	<div>
		<h1>
			<Logo /> Welcome to the App
		</h1>
	</div>,
	document.getElementById('app')
);