const React = require('react');

var GistFile = React.createClass({
  render: function() {
    return (
      <div className="gistFile">
        <h2>{ this.props.filename } </h2>
        <p>{ this.props.fileContent }</p>
      </div>
    )
  }
});

module.exports = GistFile;