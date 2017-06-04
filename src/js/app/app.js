import NavController from "./controller/NavController";

console.dir(NavController);

var angular = require('angular');

var app = angular.module("paladinApp", []);

app.controller("NavController", NavController);
