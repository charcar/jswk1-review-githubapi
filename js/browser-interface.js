var apiKey = require('./../.env').apiKey;
var getUsername = require('./../js/git-interface.js').getUsername;
var getRepos = require('./../js/git-interface.js').getRepos;

$(document).ready(function() {
 $('#grabRepo').submit(function(event) {
   event.preventDefault();
   getUsername();
   getRepos();
   $('.username-results').empty();
   $('.repo-results').empty();
  });
});
