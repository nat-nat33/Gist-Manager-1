const React = require('react');
const $ = require('jquery');
const GistList = require('./GistList/index.jsx');
const GistEditor = require('./GistEditor/index.jsx');

var GistPage = React.createClass({

  getInitialState: function() {
    return {
      gistList: [],
      currentGist: {}
    };
  },
  updateCurrentGist: function(gist) {
    var accessToken = localStorage.getItem('accessToken');
    var username = localStorage.getItem('username');
    $.ajax({
      url: "https://api.github.com/gists/" + gist.id,
      method: 'GET',
      headers: {
        'Authorization': 'token ' + accessToken
      },
      cache: false,
      success: function(data) {
        this.setState({
          currentGist: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Error", "https://api.github.com/gists/" + gist.id, status, err.toString());
      }.bind(this)
    })
  },
  loadDataFromGithub: function() {
    var accessToken = localStorage.getItem('accessToken');
    var username = localStorage.getItem('username');
    $.ajax({
      url: "https://api.github.com/users/" + username + '/gists',
      dataType: 'json',
      headers: {
        'Authorization': 'token ' + accessToken
      },
      method: 'GET',
      cache: false,
      success: function(data) {
        this.setState({gistList: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Error", this.props.gistUrl, status, err.toString());
      }.bind(this)
    })
  },
  postGist: function(newGist) {
    var accessToken = localStorage.getItem('accessToken');
    console.log("POST", newGist);
    $.ajax({
      url: "https://api.github.com/gists",
      dataType: 'json',
      headers: {
        'Authorization': 'token ' + accessToken
      },
      method: 'POST',
      data: newGist,
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Error", "https://api.github.com/gists", status, err.toString());
      }.bind(this)
    })
  },
  deleteGist: function(gist) {
    var accessToken = localStorage.getItem('accessToken');
    if(!this.state.currentGist.id) return
    $.ajax({
      url: "https://api.github.com/gists/" + this.state.currentGist.id,
      dataType: 'json',
      headers: {
        'Authorization': 'token ' + accessToken
      },
      method: 'DELETE',
      cache: false,
      success: function(data) {
        this.loadDataFromGithub();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Error", "https://api.github.com/gists", status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function() {
    if(localStorage.getItem('accessToken')) {
      this.loadDataFromGithub();
    }
  },
  render: function() {
    return (
      <div>
        {
          localStorage.getItem('accessToken') ?
          <div className="gistPage">
            <GistList gistList={this.state.gistList} updateCurrentGist={this.updateCurrentGist}/>
            <GistEditor deleteGist={this.deleteGist} postGist={this.postGist} currentGist={this.state.currentGist} />
          </div>
          : null
        }
      </div>
    )
  }
})

module.exports = GistPage;