const React = require('react');
const GistItem = require('./components/GistItem');

var GistList = React.createClass({
  render: function() {
    console.log("GIST LIST");
    var gistItems = this.props.gistList.map(function(gistItem) {
      return (
        <GistItem key={gistItem.id} gistItem={gistItem}/>
      )
    });
    return (
      <div className="GistList">
        {gistItems}
      </div>
    )
  }
});

module.exports = GistList;