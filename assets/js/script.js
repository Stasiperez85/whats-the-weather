var getUserRepos = function() {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid="
    // make a get request to url
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  getUserRepos();