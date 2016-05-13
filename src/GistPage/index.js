const React = require('react');
const $ = require('jquery');
const GistList = require('./GistList');

var GistPage = React.createClass({

  getInitialState: function() {
    return {
      gistList: [],
      content: '',
      accessToken: '',
      username: ''
    };
  },
  loadDataFromGithub: function() {
    console.log(this.props.gistUrl);
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
        console.error(this.props.gistUrl, status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function() {
    console.log("MOUNTED GIST PAGE");
    this.loadDataFromGithub();
  },
  render: function() {
    return (
      <GistList gistList={this.state.gistList} content={this.state.content}/>
    )
  }
})

module.exports = GistPage;