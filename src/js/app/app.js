import AppController from "./controller/AppController";
import NavController from "./controller/NavController";

const angular = require('angular');
const ngSanitize = require('angular-sanitize');

var app = angular.module("paladinApp", ['ngSanitize']);

app.controller("NavController", NavController );
app.controller("AppController", AppController );
