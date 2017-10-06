'use strict';

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	'div',
	{ style: { padding: '20px' } },
	_react2.default.createElement(
		'h1',
		null,
		'Component discoverer'
	),
	_react2.default.createElement(
		'div',
		{ style: { display: 'inline-block', background: 'purple' } },
		_react2.default.createElement(_Logo2.default, null)
	),
	_react2.default.createElement(
		'h2',
		null,
		'Buttons'
	),
	_react2.default.createElement(
		'div',
		null,
		'Button with onClick:',
		_react2.default.createElement(
			_Button2.default,
			{ onClick: function onClick() {
					return console.log('ouch');
				} },
			'Click me'
		)
	),
	_react2.default.createElement(
		'div',
		null,
		'A link:',
		_react2.default.createElement(
			_Button2.default,
			{ href: 'http://reactjs.com' },
			'Follow me'
		)
	),
	_react2.default.createElement(
		'div',
		null,
		'Custom class name:',
		_react2.default.createElement(
			_Button2.default,
			{ className: 'custom' },
			'I do nothing'
		)
	),
	_react2.default.createElement(
		'h2',
		null,
		'Suggest'
	),
	_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Suggest2.default, { options: ['eenie', 'meenie', 'miney', 'mo'] })
	),
	_react2.default.createElement(
		'h2',
		null,
		'Rating'
	),
	_react2.default.createElement(
		'div',
		null,
		'No initial rating: ',
		_react2.default.createElement(Rating, null)
	),
	_react2.default.createElement(
		'div',
		null,
		'Initial value 4: ',
		_react2.default.createElement(Rating, { defaultValue: 4 })
	),
	_react2.default.createElement(
		'div',
		null,
		'This one goes to 11: ',
		_react2.default.createElement(Rating, { defaultValue: 11 })
	),
	_react2.default.createElement(
		'div',
		null,
		'Read-only: ',
		_react2.default.createElement(Rating, { readonly: true, defaultValue: 3 })
	)
), document.getElementById('pad'));