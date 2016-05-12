var GistList = React.createClass({
  render: function() {
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