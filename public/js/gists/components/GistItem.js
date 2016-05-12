var GistItem = React.createClass({
  render: function() {
    return (
      <div className="GistItem">
        <h1>{this.props.gistItem.url}</h1>
      </div>
    )
  }
})