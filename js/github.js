var githubKey = require('./../.env').githubKey;

$(document).ready(function() {
    exports.getRepos = function(){
      $.get('https://api.github.com/users/daneden?access_token=' + githubKey).then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    };
  });
});
