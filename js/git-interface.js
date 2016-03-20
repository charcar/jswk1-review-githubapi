var apiKey = require('./../.env').apiKey;

exports.getUsername = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.username-results').append('<h1>' + username + '</h1>');
    $('.username-results').append("<img src='" + response.avatar_url + "'>");
    if(response.name != null) {
      $('.username-results').append('<strong><p>Name: </strong>' + response.name + '</p>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000&sort=created').then(function(repos){
    console.log(repos);
    console.log(repos.length);
    $('.repo-results').append("<tr><th>Repository</th><th>Description</th><th>Contributors</th></tr>");
    for(var i = 0; i < repos.length ; i++) {
      $('.repo-results').append("<tr><td><a href='https://github.com/" + username + "/" + repos[i].name + "'>" + repos[i].name + "</a></td><td>" + repos[i].description + "</td><td>" + repos[i].contributors"</td></tr>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
