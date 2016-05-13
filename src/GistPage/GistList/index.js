const React = require('react');
const GistItem = require('./GistItem');
const GistSearchBar = require('./GistSearchBar');

var GistList = React.createClass({
  handleClick: function() {

  },

  render: function() {
    var gistItems = this.props.gistList.map(function(gistItem) {
      return (
        <GistItem key={gistItem.id} gistItem={gistItem}/>
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