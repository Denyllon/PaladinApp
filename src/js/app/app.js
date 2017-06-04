import AppController from "./controller/AppController";
import NavController from "./controller/NavController";

const angular = require('angular');
const ngSanitize = require('angular-sanitize');

var app = angular.module("paladinApp", ['ngSanitize']);

AppController.$inject = ['$scope', '$sce', '$http'];
NavController.$inject = ['$scope', '$compile'];

app.controller("AppController", AppController );
app.controller("NavController", NavController );


