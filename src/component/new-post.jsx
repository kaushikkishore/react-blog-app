import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="border m-2 p-2" onSubmit={this.props.onSubmitPost}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="blogPostContent">Content</label>
            <textarea
              rows="5"
              placeholder="Your blog post content"
              name="blogPostContent"
              className="form-control"
            />{" "}
          </div>
          <input type="submit" className="btn btn-primary mb-2" name="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default NewPost;
