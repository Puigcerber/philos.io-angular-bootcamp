'use strict';

angular.module('webApp.players', ['webApp.constants'])
  .service('Players', Players);

function Players($q, $http, API_URL) {
  var playersUrl = API_URL + '/players';

  return {
    getAll: function() {
      return $http.get(playersUrl)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          return $q.reject(error.status);
        });
    }
  };
}

