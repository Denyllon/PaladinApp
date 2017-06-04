webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var NavController = function NavController($scope) {
    $scope.showName = function () {
        alert("Daniel");
    };
};

exports.default = NavController;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NavController = __webpack_require__(20);

var _NavController2 = _interopRequireDefault(_NavController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.dir(_NavController2.default);

var angular = __webpack_require__(0);

var app = angular.module("paladinApp", []);

app.controller("NavController", _NavController2.default);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(21);

/***/ })

},[3]);
//# sourceMappingURL=main.js.map