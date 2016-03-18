var getRepos = require.('./../js/github.js').getRepos;

$(document).ready(function() {
  ('#repoInfo').click(function() {
    var user = $('#username').val();
    $('#username').val("");
  });
});
