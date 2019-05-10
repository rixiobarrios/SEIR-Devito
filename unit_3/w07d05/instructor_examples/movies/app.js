const app = angular.module('MoviesApp', [])

app.controller('MainController', ['$http', function($http) {
  this.appName = "Gerard Von Schtieffel's MüvieHaüs";
  // http://www.omdbapi.com/?t=Eraserhead&apikey=afe230c0
  this.baseURL = 'http://www.omdbapi.com/?';
  this.apikey = 'apikey=' + 'afe230c0';
  this.query = 't=';
  this.movieTitle = 'Eraserhead';
  this.searchURL = this.baseURL + this.apikey + '&' + this.query + this.movieTitle;
  console.log(this.searchURL)

  // is angular data binding one way or two way?
  this.movies = []
  // use the $http service to make an AJAX request
  this.getMovies = () => {
    $http({
      method: 'GET',
      url: this.searchURL
    }).then( response => {
      console.log(response.data)
      this.movies = [response.data]
    }, error => {
      console.log('this is error', error)
    }).catch( err => console.log('Catch ', err))
  }
}]);
