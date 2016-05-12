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

var GistPage = React.createClass({
  getInitialState: function() {
    return {
      gistList: []
    };
  },
  loadDataFromGithub: function() {
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

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

var queryAccessToken = getQueryVariable('accessToken');
if(queryAccessToken) {
  localStorage.setItem('accessToken', queryAccessToken);
  window.location.href = '/';
}

var accessToken = localStorage.getItem('accessToken');
if(accessToken) {
  ReactDOM.render(
    <GistPage accessToken={accessToken} gistUrl='https://api.github.com/gists'/>,
    document.querySelector('#gist-manager')
  )
} else {
  window.location.href = '/auth/github';
}