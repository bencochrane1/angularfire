/* global app:true */
/* exported app */




'use strict';


/**
 * @ngdoc overview
 * @name nodeAppsApp
 * @description
 * # nodeAppsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('nodeAppsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://burning-fire-5497.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
