
const app = angular.module(
  "libraryApp",
  ["ngRoute"]
);

app.config(function configureApp($httpProvider){
  $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
  $httpProvider.defaults.cache = false;
});