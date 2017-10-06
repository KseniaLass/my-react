'use strict';

import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div style={ {padding: '20px'} }>
		<h1>Component discoverer</h1>

		<div style={{display:'inline-block', background:'purple'}}>
			<Logo />
		</div>

		<h2>Buttons</h2>
		<div>Button with onClick:
			<Button onClick={()=>console.log('ouch')}>Click me</Button>
		</div>
		<div>A link:
			<Button href="http://reactjs.com">Follow me</Button>
		</div>
		<div>Custom class name:
			<Button className="custom">I do nothing</Button>
		</div>

		<h2>Suggest</h2>

		<div>
			<Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
		</div>

		<h2>Rating</h2>

		<div>No initial rating: <Rating /></div>
		<div>Initial value 4: <Rating defaultValue={4}/></div>
		<div>This one goes to 11: <Rating defaultValue={11}/></div>
		<div>Read-only: <Rating readonly={true} defaultValue={3}/></div>

	</div>,
	document.getElementById('pad')
)