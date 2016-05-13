const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Router;
const browserHistory = require('react-router').browserHistory;
const IndexRoute = require('react-router').IndexRoute;
const GistPage = require('./GistPage');
const LoginPage = require('./LoginPage');
const auth = require('./auth');

// function getQueryVariable(variable) {
//     var query = window.location.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         if (decodeURIComponent(pair[0]) == variable) {
//             return decodeURIComponent(pair[1]);
//         }
//     }
// }

// var queryAccessToken = getQueryVariable('accessToken');
// var queryUsername = getQueryVariable('username');
// if(queryAccessToken && queryUsername) {
//   localStorage.setItem('accessToken', queryAccessToken);
//   localStorage.setItem('username', queryUsername);
//   window.location = '/';
// }

// var accessToken = localStorage.getItem('accessToken');
// var username = localStorage.getItem('username');
// if(accessToken && username) {
//   var gistUrl = 'https://api.github.com/users/' + username + '/gists'
// } else {
//   window.location.href = '/auth/github';
// }

// const Logout = React.createClass({
//   componentDidMount: function() {
//     auth.logout();
//     window.location.href = '/';
//   }
// });

function isAuthenticated() {
  console.log("IS AUTHENTICATED");
  if(!auth.isLoggedIn()) {
    console.log("REDIRECT")
    window.location.href = '/login';
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/gists" component={GistPage} onEnter={isAuthenticated}></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path="/" component={LoginPage}></Route>
  </Router>,
  document.querySelector('#gist-manager')
)