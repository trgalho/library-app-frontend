
const app = angular.module(
  "libraryApp",
  ["ngRoute"]
);

const api = {
  url: "http://localhost:8000/api/v1/",
  get book(){
    return this.url+"book";
  }
};

app.config(function configureApp($httpProvider){
  $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
  $httpProvider.defaults.cache = false;
});