const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Router;
const browserHistory = require('react-router').browserHistory;
const IndexRoute = require('react-router').IndexRoute;
const GistPage = require('./GistPage/index.jsx');
const LoginPage = require('./LoginPage/index.jsx');
const auth = require('./auth');

// const Logout = React.createClass({
//   componentDidMount: function() {
//     auth.logout();
//     window.location.href = '/';
//   }
// });

function isAuthenticated() {
  if(!auth.isLoggedIn()) {
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