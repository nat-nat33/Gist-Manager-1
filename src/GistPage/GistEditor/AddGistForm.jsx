const React = require('react');


var AddGistForm = React.createClass({
  getInitialState: function()  {
    return {
      numFiles: 1
    }
  },
  handlePostFile: function(isSecret, event) {
    event.preventDefault();
    // console.log(this.refs['filename0'].value);
    // console.log(event.target);
    // console.log(event.target['filename0'].value);

    var files = {};
    for(var i = 0; i < this.state.numFiles; i++) {
      files[this.refs['filename' + i].value] = {
        content: this.refs['content' + i].value
      }
    }

    this.props.postGist({
      description: this.refs['description'].value,
      public: isSecret,
      files: files
    })

    // console.log(isSecret);
    // console.log(this.refs['description'].value);
    // for(var i = 0; i < this.state.numFiles; i++) {
    //   console.log("FILENAME " + i, this.refs['filename' + i].value);
    // }

  },
  handleAddFile: function(event) {
    event.preventDefault();
    this.setState({
      numFiles: ++this.state.numFiles
    })
  },
  render: function() {
    var inputGroups = []
    for(var i = 0; i < this.state.numFiles; i++) {
      inputGroups.push(
        <div key={i} className="anotherInputDiv">
          <input
            ref={`filename${i}`}
            name={`filename${i}`}
            type="text"
            placeholder="filename"
            />
          <input
            ref={`content${i}`}
            name={`content${i}`}
            type="text"
            placeholder="content"
            />
            <button>Delete</button>
        </div>
        )
    }

    return (
      <div className="addGistForm">
        <input
          ref="description"
          type="text"
          placeholder="description"
          />
          {inputGroups}
          <button onClick={this.handleAddFile}>Add File</button>
          <button onClick={this.handlePostFile.bind(null, true)}>Save Secret</button>
          <button onClick={this.handlePostFile.bind(null, false)}>Save Public</button>
      </div>
    )
  }
})

module.exports = AddGistForm;