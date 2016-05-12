const React = require('react');
const $ = require('jquery');
const GistList = require('./GistList');

var GistPage = React.createClass({
  getInitialState: function() {
    return {
      gistList: []
    };
  },
  loadDataFromGithub: function() {
    console.log(this.props.gistUrl);
    $.ajax({
      url: this.props.gistUrl,
      dataType: 'json',
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
    this.loadDataFromGithub();
  },
  render: function() {
    return (
      <GistList gistList={this.state.gistList}/>
    )
  }
})

module.exports = GistPage;