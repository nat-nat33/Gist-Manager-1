const React = require('react');
const ReactDOM = require('react-dom');
const GistPage = require('./GistPage')

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

var queryAccessToken = getQueryVariable('accessToken');
if(queryAccessToken) {
  localStorage.setItem('accessToken', queryAccessToken);
  window.location = '/';
}

var accessToken = localStorage.getItem('accessToken');
if(accessToken) {
  console.log(accessToken);
  ReactDOM.render(
    <GistPage gistUrl='https://api.github.com/gists'/>,
    document.querySelector('#gist-manager')
  )
} else {
  window.location.href = '/auth/github';
}