const React = require('react');

var GistSearchBar = React.createClass({
  render: function() {
    console.log("GIST LIST", this.props.gistList);
    return(
      <input name="gist" placeholder="Search..."></input>
    );
  }
});

module.exports = GistSearchBar;