const React = require('react');
const GistFile = require('./GistFile.jsx');
const AddGistForm = require('./AddGistForm.jsx');
const $ = require('jquery');

var GistEditor = React.createClass({
  getInitialState: function() {
    return {
      buttonMode: ''
    }
  },
  handleAddButtonClick: function() {
    console.log('Clicked  add button');
    this.setState({
      buttonMode: 'add'
    })
  },
  handleDeleteButtonClick: function() {
    console.log("Clicked delete button");
    this.props.deleteGist();
  },
  handleEditButtonClick: function() {
    this.setState({
      buttonMode: 'edit'
    })
  },
  render: function() {
    var filenames = this.props.currentGist.files? Object.keys(this.props.currentGist.files): [];
    var that = this;


    var gistFiles = filenames.map(function(filename) {
      var fileContent = that.props.currentGist.files[filename].content;
      return (
        <GistFile key={filename} filename={filename} fileContent={fileContent}/>
      )
    })


    return (
      <div className="gistEditor">
        { this.state.buttonMode === 'add'?
          <div className="addMode">
            <AddGistForm postGist={this.props.postGist} buttonMode={this.state.buttonMode}/>
          </div>
          :
          <div className="displayMode">
            <button onClick={this.handleAddButtonClick}>Add</button>
            {
              this.props.currentGist.id ?
              <div className="gistButtons">
                <button onClick={this.handleDeleteButtonClick}>Delete</button>
                <button>Edit</button>
              </div>
              :
              null
            }
            <h1>{this.props.currentGist.description}</h1>
            {gistFiles}
          </div>
        }
      </div>
    )
  }
});

module.exports = GistEditor;