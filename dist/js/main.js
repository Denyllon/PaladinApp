webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppController = __webpack_require__(6);

var _AppController2 = _interopRequireDefault(_AppController);

var _NavController = __webpack_require__(7);

var _NavController2 = _interopRequireDefault(_NavController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angular = __webpack_require__(1);
var ngSanitize = __webpack_require__(0);

var app = angular.module("paladinApp", ['ngSanitize']);

app.controller("NavController", _NavController2.default);
app.controller("AppController", _AppController2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(9);

__webpack_require__(29);

__webpack_require__(30);

var AppController = function AppController($scope, $sce, $http) {

    $scope.menuItems = ["network", "campaigns", "locator", "rights", "insights"];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var item = _step.value;

            $http.get("/views/" + item + ".html").then(function (response) {
                $scope[item] = response.data;
            });
        };

        for (var _iterator = $scope.menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    $scope.deliberatelyTrustDangerousSnippet = function (site) {
        return $sce.trustAsHtml(site);
    };
};

exports.default = AppController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var NavController = function NavController($scope, $compile) {

    $scope.changeUserbarAppName = function (item) {
        var appName = document.querySelector('#app-name');
        appName.innerHTML = item;
    };

    $scope.loadHTML = function (site) {
        var contentSection = document.querySelector('#content');
        contentSection.setAttribute('ng-bind-html', 'deliberatelyTrustDangerousSnippet(' + site + ')');
        $compile(contentSection)($scope);
    };
};

exports.default = NavController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(2);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/locator.html";

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/campaigns.html";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/insights.html";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/network.html";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/rights.html";

/***/ })
],[8]);
//# sourceMappingURL=main.js.map