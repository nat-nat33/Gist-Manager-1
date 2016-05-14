const React = require('react');

var GistSearchBar = React.createClass({
  render: function() {
    return(
      <input name="gist" placeholder="Search..."></input>
    );
  }
});

module.exports = GistSearchBar;