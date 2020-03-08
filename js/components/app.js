webpackJsonp([0],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

        _this.state = {
            name: 'Julia'
        };
        return _this;
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { id: 'about' },
                _react2.default.createElement(
                    'div',
                    { className: 'container about-text' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'd-none d-md-block display-4 m-5 center' },
                                'About',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'h1',
                                { className: 'd-md-none h1 m-5 center' },
                                'About',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bg-main-div p-4 col-md-12 align-self-center float-none rounded' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'The main purpose of ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'EasyCryptoCheck.com'
                                    ),
                                    ' is meant to quickly check profits or loses from investment into crypto currencies. Also it allows the user to see current and historical prices of the most popular crypto currencies.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'This site relies on the crypto currency information provided by CryptoCompare.com, a global cryptocurrency market data provider.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'How to use:'
                                    ),
                                    ' pick the coin which you would like to check profit on. Pick the date',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '*'
                                    ),
                                    ' when purchase was made on this coin. Click the button "Check profit" and see the the outcome. To check another crypto coin profit, click on the button "Check Another Transaction".'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '*The date chosen is the date with the time  00:00 of that date.'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'Additional Features:'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'coming soon:'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    '- More coins will be added in the future'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    '- Posibility to check profit on multiple crypto coins'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-5' },
                                    '- Ability to create Account to keep track of the records'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));

        _this.change = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.state = {
            name: 'Julia',
            userName: '',
            email: '',
            message: ''
        };
        _this.change = _this.change.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(Contact, [{
        key: 'onSubmit',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var _state, userName, email, message, form;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _state = this.state, userName = _state.userName, email = _state.email, message = _state.message;
                                _context.next = 4;
                                return axios.post('/api/form', {
                                    userName: userName,
                                    email: email,
                                    message: message
                                });

                            case 4:
                                form = _context.sent;

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onSubmit(_x) {
                return _ref.apply(this, arguments);
            }

            return onSubmit;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'contact' },
                _react2.default.createElement(
                    'div',
                    { className: 'container disclaimer-text' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'd-none d-md-block display-4 m-5 center' },
                                'Contact Me',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'h1',
                                { className: 'd-md-none h1 m-5 center' },
                                'Contact Me',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bg-main-div p-4 col-md-12 align-self-center float-none rounded' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4 ' },
                                    'Contact me by email:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'd-none d-md-block mb-4 display-4 email' },
                                    'website@easycryptocheck.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'd-md-none h2' },
                                    'website@',
                                    _react2.default.createElement('br', null),
                                    'easycryptocheck.com'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'Thank you for your interest'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Disclaimer = function (_Component) {
    _inherits(Disclaimer, _Component);

    function Disclaimer() {
        _classCallCheck(this, Disclaimer);

        var _this = _possibleConstructorReturn(this, (Disclaimer.__proto__ || Object.getPrototypeOf(Disclaimer)).call(this));

        _this.state = {
            name: 'Julia'
        };
        return _this;
    }

    _createClass(Disclaimer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { id: 'disclaimer' },
                _react2.default.createElement(
                    'div',
                    { className: 'container disclaimer-text' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'd-none d-md-block display-4 m-5 center' },
                                'Disclaimer',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'h1',
                                { className: 'd-md-none h1 m-5 center' },
                                'Disclaimer',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bg-main-div p-4 col-md-12 align-self-center float-none rounded' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'This site is just informational. Do not rely solely on this information, but double-check. Some of the problems that might occur are:'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'The tools may have problems with \'extreme\' dates, dates far in the future or far in the past. The tools use current GTM rules for all dates in history. If today\'s date is chosen to check the profit, the real-time price of the coin may be different, because the date chosen is the date with the time 00:00 of that date.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'The information contained in this website is for general information purposes only. The information is provided by EasyCryptoCheck.com and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-4' },
                                    'Through this website you are able to link to other websites which are not under the control of EasyCryptoCheck.com. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'mb-5' },
                                    'Every effort is made to keep the website up and running smoothly. However, CryptoCheck.com takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Disclaimer;
}(_react.Component);

exports.default = Disclaimer;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

        _this.state = {
            name: 'Julia'
        };
        return _this;
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { id: 'footer' },
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center mb-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10 center' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'list-inline' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'list-inline-item', id: 'about', onClick: this.props.about },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#/about', className: 'nav-link' },
                                        'About'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'list-inline-item', id: 'contact', onClick: this.props.contact },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#/contact', className: 'nav-link' },
                                        'Contact'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'list-inline-item', id: 'privacy-policy', onClick: this.props.privacy },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#/privacy', className: 'nav-link' },
                                        'Privacy Policy'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'list-inline-item', id: 'disclaimer', onClick: this.props.disclaimer },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#/disclaimer', className: 'nav-link' },
                                        'Disclaimer'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer-copyright text-center py-3 copy' },
                    '\xA9 ',
                    new Date().getFullYear(),
                    ' Copyright',
                    _react2.default.createElement(
                        'a',
                        { className: 'd-block p-1', href: 'https://juliastanina.com', target: '_blank' },
                        'Julia Stanina'
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import moment from 'moment'


var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      name: 'Julia'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var cryptoCoin = this.props.globalState.cryptoCoin.cryptoCoin;
      var _props$globalState$cr = this.props.globalState.cryptoPriceNow,
          BTCPrice = _props$globalState$cr.BTCPrice,
          ETHPrice = _props$globalState$cr.ETHPrice,
          DASHPrice = _props$globalState$cr.DASHPrice,
          BCHPrice = _props$globalState$cr.BCHPrice,
          LTCPrice = _props$globalState$cr.LTCPrice,
          NEOPrice = _props$globalState$cr.NEOPrice,
          XLMPrice = _props$globalState$cr.XLMPrice,
          XMRPrice = _props$globalState$cr.XMRPrice,
          MIOTAPrice = _props$globalState$cr.MIOTAPrice,
          NASPrice = _props$globalState$cr.NASPrice,
          ADAPrice = _props$globalState$cr.ADAPrice;
      var _props$globalState$hi = this.props.globalState.historicalPriceBTC,
          BTCPriceWeekAgo = _props$globalState$hi.BTCPriceWeekAgo,
          BTCPriceMonthAgo = _props$globalState$hi.BTCPriceMonthAgo,
          BTCPriceYearAgo = _props$globalState$hi.BTCPriceYearAgo;
      var _props$globalState$hi2 = this.props.globalState.historicalPriceETH,
          ETHPriceWeekAgo = _props$globalState$hi2.ETHPriceWeekAgo,
          ETHPriceMonthAgo = _props$globalState$hi2.ETHPriceMonthAgo,
          ETHPriceYearAgo = _props$globalState$hi2.ETHPriceYearAgo;
      var _props$globalState$hi3 = this.props.globalState.historicalPriceDASH,
          DASHPriceWeekAgo = _props$globalState$hi3.DASHPriceWeekAgo,
          DASHPriceMonthAgo = _props$globalState$hi3.DASHPriceMonthAgo,
          DASHPriceYearAgo = _props$globalState$hi3.DASHPriceYearAgo;
      var _props$globalState$hi4 = this.props.globalState.historicalPriceBCH,
          BCHPriceWeekAgo = _props$globalState$hi4.BCHPriceWeekAgo,
          BCHPriceMonthAgo = _props$globalState$hi4.BCHPriceMonthAgo,
          BCHPriceYearAgo = _props$globalState$hi4.BCHPriceYearAgo;
      var _props$globalState$hi5 = this.props.globalState.historicalPriceLTC,
          LTCPriceWeekAgo = _props$globalState$hi5.LTCPriceWeekAgo,
          LTCPriceMonthAgo = _props$globalState$hi5.LTCPriceMonthAgo,
          LTCPriceYearAgo = _props$globalState$hi5.LTCPriceYearAgo;
      var _props$globalState$hi6 = this.props.globalState.historicalPriceXMR,
          XMRPriceWeekAgo = _props$globalState$hi6.XMRPriceWeekAgo,
          XMRPriceMonthAgo = _props$globalState$hi6.XMRPriceMonthAgo,
          XMRPriceYearAgo = _props$globalState$hi6.XMRPriceYearAgo;
      var _props$globalState$hi7 = this.props.globalState.historicalPriceMIOTA,
          MIOTAPriceWeekAgo = _props$globalState$hi7.MIOTAPriceWeekAgo,
          MIOTAPriceMonthAgo = _props$globalState$hi7.MIOTAPriceMonthAgo,
          MIOTAPriceYearAgo = _props$globalState$hi7.MIOTAPriceYearAgo;
      var _props$globalState$hi8 = this.props.globalState.historicalPriceNEO,
          NEOPriceWeekAgo = _props$globalState$hi8.NEOPriceWeekAgo,
          NEOPriceMonthAgo = _props$globalState$hi8.NEOPriceMonthAgo,
          NEOPriceYearAgo = _props$globalState$hi8.NEOPriceYearAgo;
      var _props$globalState$hi9 = this.props.globalState.historicalPriceXLM,
          XLMPriceWeekAgo = _props$globalState$hi9.XLMPriceWeekAgo,
          XLMPriceMonthAgo = _props$globalState$hi9.XLMPriceMonthAgo,
          XLMPriceYearAgo = _props$globalState$hi9.XLMPriceYearAgo;
      var _props$globalState$hi10 = this.props.globalState.historicalPriceNAS,
          NASPriceWeekAgo = _props$globalState$hi10.NASPriceWeekAgo,
          NASPriceMonthAgo = _props$globalState$hi10.NASPriceMonthAgo,
          NASPriceYearAgo = _props$globalState$hi10.NASPriceYearAgo;
      var _props$globalState$hi11 = this.props.globalState.historicalPriceADA,
          ADAPriceWeekAgo = _props$globalState$hi11.ADAPriceWeekAgo,
          ADAPriceMonthAgo = _props$globalState$hi11.ADAPriceMonthAgo,
          ADAPriceYearAgo = _props$globalState$hi11.ADAPriceYearAgo;


      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12 center pt-1' },
              _react2.default.createElement(
                'h2',
                null,
                'Check Your Profit',
                _react2.default.createElement('hr', null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'logo p-4 col-md-10 align-self-center float-none rounded' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Select Coin'
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'form-control', id: 'coin', name: 'coin', onInput: this.props.onInputCoin, onChange: this.props.cryptoDataUpdate, value: this.props.globalState.cryptoCoin },
                  _react2.default.createElement(
                    'option',
                    { value: 'BTC' },
                    'Bitcoin'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'ETH' },
                    'Ethereum'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'DASH' },
                    'Dash'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'BCH' },
                    'Bitcoin Cash'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'LTC' },
                    'Lite Coin'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'XMR' },
                    'Monero'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'IOT' },
                    'IOTA'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'NEO' },
                    'NEO'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'XLM' },
                    'Stellar'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'NAS' },
                    'Nebulas'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'ADA' },
                    'Cardano'
                  )
                ),
                _react2.default.createElement(
                  'label',
                  null,
                  'Amount'
                ),
                _react2.default.createElement('input', { type: 'number', inputMode: 'numeric', name: 'amount', className: 'amount', onChange: this.props.onInputChange, value: this.props.globalState.cryptoAmount }),
                _react2.default.createElement(
                  'label',
                  null,
                  'Date'
                ),
                _react2.default.createElement(_reactDatepicker2.default, { selected: this.props.globalState.date, onChange: this.props.handleDateChange }),
                _react2.default.createElement(
                  'button',
                  { type: 'submit', onClick: this.props.api },
                  'Check Profits'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import moment from 'moment'


var Prices = function (_Component) {
    _inherits(Prices, _Component);

    function Prices() {
        _classCallCheck(this, Prices);

        var _this = _possibleConstructorReturn(this, (Prices.__proto__ || Object.getPrototypeOf(Prices)).call(this));

        _this.state = {
            name: 'Julia'
        };
        return _this;
    }

    _createClass(Prices, [{
        key: 'render',
        value: function render() {
            var _props$globalState$cr = this.props.globalState.cryptoPriceNow,
                BTCPrice = _props$globalState$cr.BTCPrice,
                ETHPrice = _props$globalState$cr.ETHPrice,
                DASHPrice = _props$globalState$cr.DASHPrice,
                BCHPrice = _props$globalState$cr.BCHPrice,
                LTCPrice = _props$globalState$cr.LTCPrice,
                NEOPrice = _props$globalState$cr.NEOPrice,
                XLMPrice = _props$globalState$cr.XLMPrice,
                XMRPrice = _props$globalState$cr.XMRPrice,
                MIOTAPrice = _props$globalState$cr.MIOTAPrice,
                NASPrice = _props$globalState$cr.NASPrice,
                ADAPrice = _props$globalState$cr.ADAPrice;
            var _props$globalState$hi = this.props.globalState.historicalPriceBTC,
                BTCPriceWeekAgo = _props$globalState$hi.BTCPriceWeekAgo,
                BTCPriceMonthAgo = _props$globalState$hi.BTCPriceMonthAgo,
                BTCPriceYearAgo = _props$globalState$hi.BTCPriceYearAgo;
            var _props$globalState$hi2 = this.props.globalState.historicalPriceETH,
                ETHPriceWeekAgo = _props$globalState$hi2.ETHPriceWeekAgo,
                ETHPriceMonthAgo = _props$globalState$hi2.ETHPriceMonthAgo,
                ETHPriceYearAgo = _props$globalState$hi2.ETHPriceYearAgo;
            var _props$globalState$hi3 = this.props.globalState.historicalPriceDASH,
                DASHPriceWeekAgo = _props$globalState$hi3.DASHPriceWeekAgo,
                DASHPriceMonthAgo = _props$globalState$hi3.DASHPriceMonthAgo,
                DASHPriceYearAgo = _props$globalState$hi3.DASHPriceYearAgo;
            var _props$globalState$hi4 = this.props.globalState.historicalPriceBCH,
                BCHPriceWeekAgo = _props$globalState$hi4.BCHPriceWeekAgo,
                BCHPriceMonthAgo = _props$globalState$hi4.BCHPriceMonthAgo,
                BCHPriceYearAgo = _props$globalState$hi4.BCHPriceYearAgo;
            var _props$globalState$hi5 = this.props.globalState.historicalPriceLTC,
                LTCPriceWeekAgo = _props$globalState$hi5.LTCPriceWeekAgo,
                LTCPriceMonthAgo = _props$globalState$hi5.LTCPriceMonthAgo,
                LTCPriceYearAgo = _props$globalState$hi5.LTCPriceYearAgo;
            var _props$globalState$hi6 = this.props.globalState.historicalPriceXMR,
                XMRPriceWeekAgo = _props$globalState$hi6.XMRPriceWeekAgo,
                XMRPriceMonthAgo = _props$globalState$hi6.XMRPriceMonthAgo,
                XMRPriceYearAgo = _props$globalState$hi6.XMRPriceYearAgo;
            var _props$globalState$hi7 = this.props.globalState.historicalPriceMIOTA,
                MIOTAPriceWeekAgo = _props$globalState$hi7.MIOTAPriceWeekAgo,
                MIOTAPriceMonthAgo = _props$globalState$hi7.MIOTAPriceMonthAgo,
                MIOTAPriceYearAgo = _props$globalState$hi7.MIOTAPriceYearAgo;
            var _props$globalState$hi8 = this.props.globalState.historicalPriceNEO,
                NEOPriceWeekAgo = _props$globalState$hi8.NEOPriceWeekAgo,
                NEOPriceMonthAgo = _props$globalState$hi8.NEOPriceMonthAgo,
                NEOPriceYearAgo = _props$globalState$hi8.NEOPriceYearAgo;
            var _props$globalState$hi9 = this.props.globalState.historicalPriceXLM,
                XLMPriceWeekAgo = _props$globalState$hi9.XLMPriceWeekAgo,
                XLMPriceMonthAgo = _props$globalState$hi9.XLMPriceMonthAgo,
                XLMPriceYearAgo = _props$globalState$hi9.XLMPriceYearAgo;
            var _props$globalState$hi10 = this.props.globalState.historicalPriceNAS,
                NASPriceWeekAgo = _props$globalState$hi10.NASPriceWeekAgo,
                NASPriceMonthAgo = _props$globalState$hi10.NASPriceMonthAgo,
                NASPriceYearAgo = _props$globalState$hi10.NASPriceYearAgo;
            var _props$globalState$hi11 = this.props.globalState.historicalPriceADA,
                ADAPriceWeekAgo = _props$globalState$hi11.ADAPriceWeekAgo,
                ADAPriceMonthAgo = _props$globalState$hi11.ADAPriceMonthAgo,
                ADAPriceYearAgo = _props$globalState$hi11.ADAPriceYearAgo;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row justify-content-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement(
                            'section',
                            { id: 'prices', className: 'row crypto-table' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12 center' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-none d-md-block display-4 m-5' },
                                    'Most Popular Crypto Coins ',
                                    new Date().getFullYear(),
                                    _react2.default.createElement('hr', null)
                                ),
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'd-md-none h1 m-5' },
                                    'Most Popular Crypto Coins 2019',
                                    _react2.default.createElement('hr', null)
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row justify-content-around align-items-center table-header' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 py-4' },
                                        '#'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-4' },
                                        'Coin'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-4' },
                                        'Today'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-4 d-none d-md-block' },
                                        'Week Ago'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-4 d-none d-md-block' },
                                        'Month Ago'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-4' },
                                        'Year Ago'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '1'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/btc.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Bitcoin'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        BTCPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        BTCPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        BTCPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        BTCPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '2'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/eth.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Ethereum'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        ETHPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        ETHPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        ETHPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        ETHPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '3'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/dash.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Dash'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        DASHPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        DASHPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        DASHPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        DASHPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '4'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/bch.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Bitcoin Cash'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        BCHPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        BCHPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        BCHPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        BCHPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '5'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/ltc.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Lite Coin'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        LTCPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        LTCPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        LTCPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        LTCPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '6'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/xmr.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Monero'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        XMRPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        XMRPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        XMRPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        XMRPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '7'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/iota.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'IOTA'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        MIOTAPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        MIOTAPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        MIOTAPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        MIOTAPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '8'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/neo.jpg', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'NEO'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        NEOPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        NEOPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        NEOPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        NEOPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '9'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/xlm.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Stellar'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        XLMPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        XLMPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        XLMPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        XLMPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '10'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/nas.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Nebulas'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        NASPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        NASPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        NASPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        NASPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-1 p-1 align-text-middle' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                            '11'
                                        ),
                                        _react2.default.createElement('img', { src: '/img/ada.png', className: 'img-fluid btc float-left ml-2' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 col-lg-3 py-3' },
                                        'Cardano'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 price-today' },
                                        '$',
                                        ADAPrice
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        ADAPriceWeekAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3 d-none d-md-block' },
                                        '$',
                                        ADAPriceMonthAgo
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-2 py-3' },
                                        '$',
                                        ADAPriceYearAgo
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row border-0 justify-content-center align-items-center m-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-12 my-4' },
                                        _react2.default.createElement('img', { src: '/img/poweredby.png', className: 'img-fluid' })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Prices;
}(_react.Component);

exports.default = Prices;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Privacy = function (_Component) {
    _inherits(Privacy, _Component);

    function Privacy() {
        _classCallCheck(this, Privacy);

        var _this = _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).call(this));

        _this.state = {
            name: 'Julia'
        };
        return _this;
    }

    _createClass(Privacy, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { id: 'privacy' },
                _react2.default.createElement(
                    'div',
                    { className: 'container privacy-text' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'd-none d-md-block display-4 m-5' },
                                'Privacy Policy for www.easycryptocheck.com',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'h1',
                                { className: 'd-md-none h2 mt-5 mr-5 mb-5' },
                                'Privacy Policy for www.',
                                _react2.default.createElement('br', null),
                                'easycryptocheck.com',
                                _react2.default.createElement('hr', null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bg-main-div p-4 col-md-12 align-self-center float-none rounded' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' At www.easycryptocheck.com, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by www.easycryptocheck.com and how it is used. '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Log Files'
                                    ),
                                    _react2.default.createElement('br', null),
                                    ' Like many other Web sites, www.easycryptocheck.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track users movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Cookies and Web Beacons'
                                    ),
                                    _react2.default.createElement('br', null),
                                    ' www.easycryptocheck.com does not use cookies. '
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'DoubleClick DART Cookie'
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    '.:: Google, as a third party vendor, uses cookies to serve ads on www.easycryptocheck.com.',
                                    _react2.default.createElement('br', null),
                                    '.:: Google\'s use of the DART cookie enables it to serve ads to your users based on their visit to www.easycryptocheck.com and other sites on the Internet. ',
                                    _react2.default.createElement('br', null),
                                    '.:: Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include ....... ',
                                    _react2.default.createElement('br', null),
                                    ' Google Adsense',
                                    _react2.default.createElement('br', null),
                                    ' ',
                                    _react2.default.createElement('br', null),
                                    ' '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' These third-party ad servers or ad networks use technology to the advertisements and links that appear on www.easycryptocheck.com send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see. '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' www.easycryptocheck.com has no access to or control over these cookies that are used by third-party advertisers. '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. www.easycryptocheck.com\'s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. '
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pb-4' },
                                    ' If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers\' respective websites. '
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Privacy;
}(_react.Component);

exports.default = Privacy;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            name: 'Julia'
        };

        _this.checkGains = _this.checkGains.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'checkGains',
        value: function checkGains() {
            var percent = this.props.globalState.totalStatus.percent;


            if (this.props.globalState.status == 'gain') {
                return 'You made ' + percent + '% profit';
            } else if (this.props.globalState.status == 'loss') {
                return 'You lost ' + percent + '% of your investment';
            } else if (this.props.globalState.status == 'no data') {
                return 'There is no data available for ' + this.props.globalState.cryptoCoin;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$globalState$to = this.props.globalState.totalStatus,
                newCP = _props$globalState$to.newCP,
                newSP = _props$globalState$to.newSP,
                status = _props$globalState$to.status,
                percent = _props$globalState$to.percent;
            var _props$globalState$cr = this.props.globalState.cryptoPriceNow,
                BTCPrice = _props$globalState$cr.BTCPrice,
                ETHPrice = _props$globalState$cr.ETHPrice,
                DASHPrice = _props$globalState$cr.DASHPrice,
                BCHPrice = _props$globalState$cr.BCHPrice,
                LTCPrice = _props$globalState$cr.LTCPrice,
                NEOPrice = _props$globalState$cr.NEOPrice,
                XLMPrice = _props$globalState$cr.XLMPrice,
                XMRPrice = _props$globalState$cr.XMRPrice,
                MIOTAPrice = _props$globalState$cr.MIOTAPrice,
                NASPrice = _props$globalState$cr.NASPrice,
                ADAPrice = _props$globalState$cr.ADAPrice;
            var _props$globalState$hi = this.props.globalState.historicalPriceBTC,
                BTCPriceWeekAgo = _props$globalState$hi.BTCPriceWeekAgo,
                BTCPriceMonthAgo = _props$globalState$hi.BTCPriceMonthAgo,
                BTCPriceYearAgo = _props$globalState$hi.BTCPriceYearAgo;
            var _props$globalState$hi2 = this.props.globalState.historicalPriceETH,
                ETHPriceWeekAgo = _props$globalState$hi2.ETHPriceWeekAgo,
                ETHPriceMonthAgo = _props$globalState$hi2.ETHPriceMonthAgo,
                ETHPriceYearAgo = _props$globalState$hi2.ETHPriceYearAgo;
            var _props$globalState$hi3 = this.props.globalState.historicalPriceDASH,
                DASHPriceWeekAgo = _props$globalState$hi3.DASHPriceWeekAgo,
                DASHPriceMonthAgo = _props$globalState$hi3.DASHPriceMonthAgo,
                DASHPriceYearAgo = _props$globalState$hi3.DASHPriceYearAgo;
            var _props$globalState$hi4 = this.props.globalState.historicalPriceBCH,
                BCHPriceWeekAgo = _props$globalState$hi4.BCHPriceWeekAgo,
                BCHPriceMonthAgo = _props$globalState$hi4.BCHPriceMonthAgo,
                BCHPriceYearAgo = _props$globalState$hi4.BCHPriceYearAgo;
            var _props$globalState$hi5 = this.props.globalState.historicalPriceLTC,
                LTCPriceWeekAgo = _props$globalState$hi5.LTCPriceWeekAgo,
                LTCPriceMonthAgo = _props$globalState$hi5.LTCPriceMonthAgo,
                LTCPriceYearAgo = _props$globalState$hi5.LTCPriceYearAgo;
            var _props$globalState$hi6 = this.props.globalState.historicalPriceXMR,
                XMRPriceWeekAgo = _props$globalState$hi6.XMRPriceWeekAgo,
                XMRPriceMonthAgo = _props$globalState$hi6.XMRPriceMonthAgo,
                XMRPriceYearAgo = _props$globalState$hi6.XMRPriceYearAgo;
            var _props$globalState$hi7 = this.props.globalState.historicalPriceMIOTA,
                MIOTAPriceWeekAgo = _props$globalState$hi7.MIOTAPriceWeekAgo,
                MIOTAPriceMonthAgo = _props$globalState$hi7.MIOTAPriceMonthAgo,
                MIOTAPriceYearAgo = _props$globalState$hi7.MIOTAPriceYearAgo;
            var _props$globalState$hi8 = this.props.globalState.historicalPriceNEO,
                NEOPriceWeekAgo = _props$globalState$hi8.NEOPriceWeekAgo,
                NEOPriceMonthAgo = _props$globalState$hi8.NEOPriceMonthAgo,
                NEOPriceYearAgo = _props$globalState$hi8.NEOPriceYearAgo;
            var _props$globalState$hi9 = this.props.globalState.historicalPriceXLM,
                XLMPriceWeekAgo = _props$globalState$hi9.XLMPriceWeekAgo,
                XLMPriceMonthAgo = _props$globalState$hi9.XLMPriceMonthAgo,
                XLMPriceYearAgo = _props$globalState$hi9.XLMPriceYearAgo;
            var _props$globalState$hi10 = this.props.globalState.historicalPriceNAS,
                NASPriceWeekAgo = _props$globalState$hi10.NASPriceWeekAgo,
                NASPriceMonthAgo = _props$globalState$hi10.NASPriceMonthAgo,
                NASPriceYearAgo = _props$globalState$hi10.NASPriceYearAgo;
            var _props$globalState$hi11 = this.props.globalState.historicalPriceADA,
                ADAPriceWeekAgo = _props$globalState$hi11.ADAPriceWeekAgo,
                ADAPriceMonthAgo = _props$globalState$hi11.ADAPriceMonthAgo,
                ADAPriceYearAgo = _props$globalState$hi11.ADAPriceYearAgo;


            return _react2.default.createElement(
                'section',
                { id: 'results' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12 mt-5 center pt-1' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mt-5 bg-main-div p-4 col-md-10 align-self-center float-none rounded' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement('img', { src: '/img/favicon-blue.png', className: 'bitcoin-logo' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'mb-3 h2' },
                                        'Your $',
                                        newCP,
                                        ' dollar investment is now '
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'display-3' },
                                        '$',
                                        newSP
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'mb-3 h2' },
                                        this.checkGains()
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'check-transaction', onClick: this.props.goBack },
                                        'Check Another Transaction '
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-10' },
                            _react2.default.createElement(
                                'section',
                                { className: 'row crypto-table' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12 center' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'd-none d-md-block display-4 m-5', onClick: this.props.currencyNow },
                                        'Most Popular Crypto Coins 2019',
                                        _react2.default.createElement('hr', null)
                                    ),
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'd-md-none h2 m-5', onClick: this.props.currencyNow },
                                        'Most Popular Crypto Coins 2019',
                                        _react2.default.createElement('hr', null)
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row justify-content-around align-items-center table-header', onClick: this.props.currencyNow },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 py-4' },
                                            '#'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-4' },
                                            'Coin'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-4' },
                                            'Today'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-4 d-none d-md-block' },
                                            'Week Ago'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-4 d-none d-sm-block' },
                                            'Month Ago'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-4' },
                                            'Year Ago'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '1'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/btc.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Bitcoin'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            BTCPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            BTCPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            BTCPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            BTCPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '2'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/eth.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Ethereum'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            ETHPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            ETHPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            ETHPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            ETHPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '3'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/dash.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Dash'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            DASHPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            DASHPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            DASHPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            DASHPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '4'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/bch.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Bitcoin Cash'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            BCHPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            BCHPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            BCHPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            BCHPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '5'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/ltc.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Lite Coin'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            LTCPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            LTCPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            LTCPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            LTCPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '6'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/xmr.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Moreno'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            XMRPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            XMRPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            XMRPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            XMRPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '7'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/iota.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'IOTA'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            MIOTAPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            MIOTAPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            MIOTAPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            MIOTAPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '8'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/neo.jpg', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'NEO'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            NEOPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            NEOPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            NEOPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            NEOPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '9'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/xlm.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Stellar'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            XLMPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            XLMPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            XLMPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            XLMPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-transparent' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '10'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/nas.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Nebulas'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            NASPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            NASPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            NASPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            NASPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-top-0 border-bottom-0 justify-content-around align-items-center bg-gray' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-1 p-1 align-text-middle' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'align-self-middle float-left mt-1 ml-2 d-none d-lg-block' },
                                                '11'
                                            ),
                                            _react2.default.createElement('img', { src: '/img/ada.png', className: 'img-fluid btc float-left ml-2' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-3 py-3' },
                                            'Cardano'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 price-today' },
                                            '$',
                                            ADAPrice
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-md-block' },
                                            '$',
                                            ADAPriceWeekAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3 d-none d-sm-block' },
                                            '$',
                                            ADAPriceMonthAgo
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-2 py-3' },
                                            '$',
                                            ADAPriceYearAgo
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row border-0 justify-content-center align-items-center m-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-sm-12 my-4' },
                                            _react2.default.createElement('img', { src: '/img/poweredby.png', className: 'img-fluid' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__(34);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _axios = __webpack_require__(295);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(300);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(303);

var _Results2 = _interopRequireDefault(_Results);

var _Prices = __webpack_require__(301);

var _Prices2 = _interopRequireDefault(_Prices);

var _Footer = __webpack_require__(299);

var _Footer2 = _interopRequireDefault(_Footer);

var _Privacy = __webpack_require__(302);

var _Privacy2 = _interopRequireDefault(_Privacy);

var _About = __webpack_require__(296);

var _About2 = _interopRequireDefault(_About);

var _Disclaimer = __webpack_require__(298);

var _Disclaimer2 = _interopRequireDefault(_Disclaimer);

var _Contact = __webpack_require__(297);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import createBrowserHistory from 'history/createBrowserHistory'
//import {Router} from 'react-router'
//import {BrowserRouter, Link} from 'react-router-dom'


var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            name: 'Julia',
            location: 'home',
            date: new Date(),
            data: '',
            cryptoCoin: 'BTC',
            cryptoAmount: 1,
            status: '',
            totalStatus: '',
            cryptoPriceNow: '',
            historicalPriceBTC: '',
            historicalPriceETH: '',
            historicalPriceDASH: '',
            historicalPriceBCH: '',
            historicalPriceLTC: '',
            historicalPriceXMR: '',
            historicalPriceMIOTA: '',
            historicalPriceNEO: '',
            historicalPriceXLM: '',
            historicalPriceNAS: '',
            historicalPriceADA: ''
        };
        _this.routerSystem = _this.routerSystem.bind(_this);
        _this.handleDateChange = _this.handleDateChange.bind(_this);
        _this.api = _this.api.bind(_this);
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.goBack = _this.goBack.bind(_this);
        _this.currencyNow = _this.currencyNow.bind(_this);
        _this.privacy = _this.privacy.bind(_this);
        _this.about = _this.about.bind(_this);
        _this.contact = _this.contact.bind(_this);
        _this.disclaimer = _this.disclaimer.bind(_this);
        _this.onInputCoin = _this.onInputCoin.bind(_this);
        _this.cryptoDataUpdate = _this.cryptoDataUpdate.bind(_this);
        return _this;
    }

    _createClass(Layout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + self.state.cryptoCoin + '&tsyms=BTC,USD,EUR&ts=' + Math.floor(self.state.date / 1000) + '&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                //              console.log(response.data)
                var firstKey = Object.keys(response.data)[0];
                //              console.log(firstKey)
                var keyName = response.data[firstKey];
                //              console.log(keyName.USD)
                self.setState({
                    data: keyName,
                    dollarAmountNow: keyName.USD
                }, function () {
                    //                console.log(self.state);
                });
            }).catch(function (error) {
                console.log(error);
            });

            // api request for multiple coins prices now

            _axios2.default.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH,LTC,ETH,NEO,XLM,XMR,DASH,MIOTA,NAS,ADA&tsyms=BTC,USD,EUR&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {

                self.setState({
                    cryptoPriceNow: {
                        BTCPrice: response.data.BTC.USD,

                        ETHPrice: response.data.ETH.USD,

                        DASHPrice: response.data.DASH.USD,

                        BCHPrice: response.data.BCH.USD,

                        LTCPrice: response.data.LTC.USD,

                        NEOPrice: response.data.NEO.USD,

                        XLMPrice: response.data.XLM.USD,

                        XMRPrice: response.data.XMR.USD,

                        MIOTAPrice: response.data.MIOTA.USD,

                        NASPrice: response.data.NAS.USD,

                        ADAPrice: response.data.ADA.USD
                    }

                }, function () {
                    //                console.log(self.state.cryptoPriceNow);

                });
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical bitcoin data historicalPriceBTC

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceBTC: {
                        BTCPriceWeekAgo: response.data.Data[358].close,
                        BTCPriceMonthAgo: response.data.Data[335].close,
                        BTCPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                    console.log(self.state.historicalPriceBTC); 
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical ethereum data historicalPriceETH 

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceETH: {
                        ETHPriceWeekAgo: response.data.Data[358].close,
                        ETHPriceMonthAgo: response.data.Data[335].close,
                        ETHPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceETH);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical dash data historicalPriceDASH

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceDASH: {
                        DASHPriceWeekAgo: response.data.Data[358].close,
                        DASHPriceMonthAgo: response.data.Data[335].close,
                        DASHPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceDASH);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical bitcoin cash data historicalPriceBCH

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceBCH: {
                        BCHPriceWeekAgo: response.data.Data[358].close,
                        BCHPriceMonthAgo: response.data.Data[335].close,
                        BCHPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceBCH);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data for Lite Coin historicalPriceLTC

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceLTC: {
                        LTCPriceWeekAgo: response.data.Data[358].close,
                        LTCPriceMonthAgo: response.data.Data[335].close,
                        LTCPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceLTC);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data for moreno historicalpriceXMR

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceXMR: {
                        XMRPriceWeekAgo: response.data.Data[358].close,
                        XMRPriceMonthAgo: response.data.Data[335].close,
                        XMRPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceXMR);
            }).catch(function (error) {
                console.log(error);
            });

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=MIOTA&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceMIOTA: {
                        MIOTAPriceWeekAgo: response.data.Data[358].close,
                        MIOTAPriceMonthAgo: response.data.Data[335].close,
                        MIOTAPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceMIOTA);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data for NEO historicalPriceNEO

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceNEO: {
                        NEOPriceWeekAgo: response.data.Data[358].close,
                        NEOPriceMonthAgo: response.data.Data[335].close,
                        NEOPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceNEO);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data for Stellar historicalPriceXML

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=XLM&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceXLM: {
                        XLMPriceWeekAgo: response.data.Data[358].close,
                        XLMPriceMonthAgo: response.data.Data[335].close,
                        XLMPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceXLM);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data fo Nebulas historicalPriceNAS

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=NAS&tsym=USD&limit=365&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceNAS: {
                        NASPriceWeekAgo: response.data.Data[358].close,
                        NASPriceMonthAgo: response.data.Data[335].close,
                        NASPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceNAS);
            }).catch(function (error) {
                console.log(error);
            });

            // request for historical data fo Cardano historicalPriceADA

            _axios2.default.get('https://min-api.cryptocompare.com/data/histoday?fsym=ADA&tsym=USD&limit=365&extraParams=easy_crypto_check').then(function (response) {
                self.setState({
                    historicalPriceADA: {
                        ADAPriceWeekAgo: response.data.Data[358].close,
                        ADAPriceMonthAgo: response.data.Data[335].close,
                        ADAPriceYearAgo: response.data.Data[0].close
                    }
                });
            }, function () {
                //                console.log(self.state.historicalPriceADA);
            }).catch(function (error) {
                console.log(error);
            });
        }

        //    updade props for state

    }, {
        key: 'cryptoDataUpdate',
        value: function cryptoDataUpdate(event) {
            var self = this;
            //        console.log(self.state.cryptoCoin);
            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + self.state.cryptoCoin + '&tsyms=USD&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                //              console.log(response.data)
                var firstKey = Object.keys(response.data)[0];
                //              console.log(firstKey)
                var keyName = response.data[firstKey];
                //              console.log(keyName)
                self.setState({
                    data: response.data,
                    dollarAmountNow: keyName.USD
                }, function () {
                    //                console.log(self.state.dollarAmountNow);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'routerSystem',
        value: function routerSystem() {
            switch (this.state.location) {
                case 'home':
                    return _react2.default.createElement(_Home2.default, { handleDateChange: this.handleDateChange, globalState: this.state, onInputChange: this.onInputChange, api: this.api, currencyNow: this.currencyNow, onInputCoin: this.onInputCoin, cryptoDataUpdate: this.cryptoDataUpdate });
                    break;
                case 'results':
                    return _react2.default.createElement(_Results2.default, { globalState: this.state, goBack: this.goBack, currencyNow: this.currencyNow });
                    break;
                case 'prices':
                    return _react2.default.createElement(_Prices2.default, { globalState: this.state, goBack: this.goBack });
                case 'privacy':
                    return _react2.default.createElement(_Privacy2.default, { globalState: this.state, goBack: this.goBack });
                case 'about':
                    return _react2.default.createElement(_About2.default, { globalState: this.state, goBack: this.goBack });
                case 'disclaimer':
                    return _react2.default.createElement(_Disclaimer2.default, { globalState: this.state, goBack: this.goBack });
                case 'contact':
                    return _react2.default.createElement(_Contact2.default, { globalState: this.state, goBack: this.goBack });
                //      default:
                //        return <Home />
            }
        }
    }, {
        key: 'handleDateChange',
        value: function handleDateChange(date) {
            this.setState({
                date: date
            });
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(event) {
            this.setState({
                cryptoAmount: event.target.value
            });
        }
    }, {
        key: 'onInputCoin',
        value: function onInputCoin(event) {
            this.setState({
                cryptoCoin: event.target.value
            });
        }

        //testFunction(e) {
        //    this.onInputCoin(e);
        //    this.cryptoDataUpdate();
        //}

    }, {
        key: 'currencyNow',
        value: function currencyNow() {
            this.setState({
                location: 'prices'
            });
        }
    }, {
        key: 'privacy',
        value: function privacy() {
            this.setState({
                location: 'privacy'
            });
        }
    }, {
        key: 'about',
        value: function about() {
            this.setState({
                location: 'about'
            });
        }
    }, {
        key: 'disclaimer',
        value: function disclaimer() {
            this.setState({
                location: 'disclaimer'
            });
        }
    }, {
        key: 'contact',
        value: function contact() {
            this.setState({
                location: 'contact'
            });
        }
    }, {
        key: 'api',
        value: function api() {
            var self = this;
            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + self.state.cryptoCoin + '&tsyms=BTC,USD,EUR&ts=' + Math.floor(self.state.date / 1000) + '&api_key=8c779f0faf9d78b3968a46e82dfc92d5cc0a7952e6179dfdb59d97baa3e0fcd8&extraParams=easy_crypto_check').then(function (response) {
                //        console.log(response.data)
                var firstKey = Object.keys(response.data)[0];

                //        console.log(response.data[firstKey])
                self.setState({
                    data: response.data[firstKey]
                }, function () {
                    //            console.log(self.state);
                    // cost price
                    var CP = self.state.data.USD;
                    var newCP = self.state.cryptoAmount * CP;

                    //selling price
                    var SP = self.state.dollarAmountNow;
                    var newSP = self.state.cryptoAmount * SP;

                    //            console.log("CP: " + CP);
                    //            console.log("SP: " + SP);
                    //            console.log("newCP: " + newCP);
                    //            console.log("newSP: " + newSP);

                    if (CP === 0) {
                        // set state if there is no data available
                        self.setState({
                            location: 'results',
                            status: 'no data',
                            totalStatus: {
                                newCP: 0,
                                CP: CP,
                                newSP: 0,
                                SP: 0,
                                percent: 0
                            }
                        });
                    } else if (newCP <= newSP) {
                        var gain = newSP - newCP;
                        var gainPercent = (gain / newCP * 100).toFixed(2);
                        //                console.log(`profit percent is ${gainPercent} %`)

                        // set state with totals and change location
                        self.setState({
                            location: 'results',
                            status: 'gain',
                            totalStatus: {
                                newCP: newCP.toFixed(2),
                                CP: CP,
                                newSP: newSP.toFixed(2),
                                SP: SP,
                                percent: gainPercent
                            }
                        });
                    } else if (newCP > newSP) {
                        var loss = newCP - newSP;
                        var lossPercent = (loss / newCP * 100).toFixed(2);
                        //                console.log(`loss percent is ${lossPercent} %`)

                        // set state with totals and change location
                        self.setState({
                            location: 'results',
                            status: 'loss',
                            totalStatus: {
                                newCP: newCP.toFixed(2),
                                CP: CP,
                                newSP: newSP.toFixed(2),
                                SP: SP,
                                percent: lossPercent
                            }

                        }
                        //                 ()=> console.log(self.state)
                        );
                    }
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'goBack',
        value: function goBack() {
            this.setState({
                location: 'home',
                date: new Date(),
                data: '',
                cryptoAmount: 1,
                status: '',
                totalStatus: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar navbar-expand-md navbar-custom navbar-light fixed-top px-4' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'navbar-brand logo', onClick: this.goBack },
                        'Easy Crypto Check'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                        _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
                    ),
                    _react2.default.createElement(
                        'nav',
                        { className: 'collapse navbar-collapse', id: 'navbarNav' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'navbar-nav ml-auto' },
                            _react2.default.createElement(
                                'li',
                                { className: 'nav-item', id: 'coins-list', onClick: this.currencyNow },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/#coins-list', className: 'nav-link' },
                                    'Coins List'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'nav-item', id: 'about', onClick: this.about },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/#about', className: 'nav-link' },
                                    'About'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'nav-item', id: 'contact', onClick: this.contact },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/#contact', className: 'nav-link' },
                                    'Contact'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'nav-item', id: 'privacy-policy', onClick: this.privacy },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/#privacy', className: 'nav-link' },
                                    'Privacy Policy'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    this.routerSystem()
                ),
                _react2.default.createElement(_Footer2.default, { globalState: this.state, goBack: this.goBack, privacy: this.privacy, about: this.about, disclaimer: this.disclaimer, contact: this.contact })
            );
        }
    }]);

    return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[325]);