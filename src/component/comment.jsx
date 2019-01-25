import React, { Component } from "react";

class Comment extends Component {
  render() {
    let form = "";
    if (this.props.showComment) {
      form = (
        <form className="border m-2 p-2" onSubmit={this.props.onCommentSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              rows="3"
              placeholder="Your blog post comment"
              name="blogPostComment"
              className="form-control"
            />{" "}
          </div>
          <input
            type="submit"
            className="btn btn-primary mb-2 btn-sm"
            name="Add Comment"
            value="Add Comment"
          />
        </form>
      );
    }
    return <React.Fragment>{form}</React.Fragment>;
  }
}

export default Comment;
