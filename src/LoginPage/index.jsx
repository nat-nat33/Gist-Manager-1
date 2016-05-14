const React = require('react');
const $ = require('jquery');

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

var LoginPage = React.createClass({
  getInitialState: function() {
    return {
      accessToken: '',
      username: ''
    }
  },
  componentWillMount: function() {
    var queryAccessToken = getQueryVariable('accessToken');
    var queryUsername = getQueryVariable('username');
    if(queryAccessToken && queryUsername) {
      localStorage.setItem('accessToken', queryAccessToken);
      localStorage.setItem('username', queryUsername);
      this.setState({accessToken: queryAccessToken});
      this.setState({username: queryUsername});
      console.log("REDIRECT TO GISTS");
      window.location.href = '/gists';
    }
  },

  render: function() {
    console.log("LOGIN");
    return (
      <a href="/auth/github">Login</a>
    );
  }
});

module.exports = LoginPage;