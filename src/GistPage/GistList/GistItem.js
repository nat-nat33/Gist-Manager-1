const React = require('react');

var GistItem = React.createClass({
  render: function() {
    return (
      <div className="GistItem">
        <a href={this.props.gistItem.html_url}>{this.props.gistItem.html_url}</a>
        <p>{this.props.gistItem.description}</p>
      </div>
    )
  }
})

module.exports = GistItem;