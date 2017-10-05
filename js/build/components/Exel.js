'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exel = function (_React$Component) {
	_inherits(Exel, _React$Component);

	function Exel() {
		_classCallCheck(this, Exel);

		return _possibleConstructorReturn(this, (Exel.__proto__ || Object.getPrototypeOf(Exel)).apply(this, arguments));
	}

	_createClass(Exel, [{
		key: '_search',
		value: function _search(e) {
			var needle = e.target.value.toLowerCase();
			if (!needle) {
				this.setState({ data: this._preSearchData });
				return;
			}
			var idx = e.target.dataset.idx;
			var searchdata = this._preSearchData.filter(function (row) {
				return row[idx].toString().toLowerCase().indexOf(needle) > -1;
			});
			this.setState({ data: searchdata });
		}
	}, {
		key: '_download',
		value: function _download(format, ev) {
			var contents = format === 'json' ? JSON.stringify(this.state.data) : this.state.data.reduce(function (result, row) {
				return result + row.reduce(function (rowresult, cell, idx) {
					return rowresult + '"' + cell.replace(/"/g, '""') + '"' + (idx < row.length - 1 ? ',' : '');
				}, '') + "\n";
			}, '');

			var URL = window.URL || window.webkitURL;
			var blob = new Blob([contents], { type: 'text/' + format });
			ev.target.href = URL.createObjectURL(blob);
			ev.target.download = 'data.' + format;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'Exel' },
				this._renderToolbar(),
				this._renderTable()
			);
		}
	}, {
		key: '_renderToolbar',
		value: function _renderToolbar() {
			return _react2.default.createElement(
				'div',
				{ className: 'toolbar' },
				_react2.default.createElement(
					'button',
					{ onClick: this._toggleSearch },
					'Search'
				),
				_react2.default.createElement(
					'a',
					{ onClick: this._download.bind(this, 'json'),
						href: 'data.json' },
					'Export JSON'
				),
				_react2.default.createElement(
					'a',
					{ onClick: this._download.bind(this, 'csv'),
						href: 'data.csv' },
					'Export CSV'
				)
			);
		}
	}, {
		key: '_renderSearch',
		value: function _renderSearch() {
			if (!this.state.search) {
				return null;
			}
			return _react2.default.createElement(
				'tr',
				{ onChange: this._search },
				this.props.headers.map(function (_ignore, idx) {
					return _react2.default.createElement(
						'td',
						{ key: idx },
						_react2.default.createElement('input', { type: 'text', 'data-idx': idx })
					);
				})
			);
		}
	}, {
		key: '_renderTable',
		value: function _renderTable() {
			return _react2.default.createElement(
				'table',
				null,
				_react2.default.createElement(
					'thead',
					{ onClick: this._sort },
					_react2.default.createElement(
						'tr',
						null,
						this.props.headers.map(function (title, idx) {
							if (this.state.sortby === idx) {
								title += this.state.descending ? ' \u2191' : ' \u2193';
							}
							return _react2.default.createElement(
								'th',
								{ key: idx },
								title
							);
						}, this)
					)
				),
				_react2.default.createElement(
					'tbody',
					{ onDoubleClick: this._showEditor },
					this._renderSearch(),
					this.state.data.map(function (row, rowidx) {
						return _react2.default.createElement(
							'tr',
							{ key: rowidx },
							row.map(function (cell, idx) {
								var content = cell;
								var edit = this.state.edit;
								if (edit && edit.row === rowidx && edit.cell === idx) {
									content = _react2.default.createElement(
										'form',
										{ onSubmit: this._save },
										_react2.default.createElement('input', { type: 'text', defaultValue: cell })
									);
								}
								return _react2.default.createElement(
									'td',
									{ key: idx, 'data-row': rowidx },
									content
								);
							}, this)
						);
					}, this)
				)
			);
		}
	}]);

	return Exel;
}(_react2.default.Component);

exports.default = Exel;