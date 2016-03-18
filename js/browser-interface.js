var getRepos = require.('./../js/github.js').getRepos;
var githubKey = require('./../.env').githubKey;
// exports.username = user;

$(document).ready(function() {
  ('#repoInfo').click(function() {
    var user = $('#usernameRepos').val();
    $('#usernameRepos').val("");
    .show('#showRepos');

  });
});
