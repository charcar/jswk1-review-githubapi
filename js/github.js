var githubKey = require('./../.env').githubKey;
// var username = require('./../js/broswer-interface.js').username;


exports.getRepos = function(username){
  $.get('https://api.github.com/users/daneden?access_token=' + githubKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
