const React = require('react');
const GistItem = require('./GistItem.jsx');
const GistSearchBar = require('./GistSearchBar.jsx');

var GistList = React.createClass({
  handleClick: function(gist) {
    this.props.updateCurrentGist(gist);
  },

  render: function() {
    var that = this;
    var gistItems = this.props.gistList.map(function(gistItem) {
      return (
        <GistItem handleClick={that.handleClick.bind(null, gistItem)} key={gistItem.id} gistItem={gistItem}/>
      )
    });
    return (
      <div className="GistList">
        <GistSearchBar gistList={this.props.gistList}/>
        {gistItems}
      </div>
    )
  }
});

module.exports = GistList;