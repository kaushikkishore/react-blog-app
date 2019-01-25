import React, { Component } from "react";
import NewPost from "./new-post";
import Comment from "./comment";
import helpers from "../helper/helper";

class Post extends Component {
  state = {
    identifier: 2,
    data: [
      {
        id: 1,
        Name: "Some cool blog post title given by the user",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!",
        CreatedOn: helpers.getDateString(1548132010000),
        ShowCommentForm: false
      },
      {
        id: 2,
        Name: "Some another cool blog post title given by the user",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!",
        CreatedOn: helpers.getDateString(1548328285844),
        ShowCommentForm: false
      }
    ]
  };

  onAddNewPost = event => {
    event.preventDefault();

    const identifier = ++this.state.identifier;

    this.state.data.push({
      id: identifier,
      Name: event.target.name.value,
      Content: event.target.blogPostContent.value,
      CreatedOn: helpers.getCurrentDateString(),
      ShowCommentForm: false
    });

    const emptyValue = "";
    event.target.name.value = emptyValue;
    event.target.blogPostContent.value = emptyValue;

    console.log(this.state);

    this.setState({
      data: this.state.data
    });
  };

  onCommentSubmit = (event, blogId) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let comment = event.target.blogPostComment.value;
  };

  onAddCommentClick = id => {
    console.log(
      "Button clicked! Now modify the variable to show the form " + id
    );

    const updatedData = this.state.data.map(obj => {
      obj.ShowCommentForm = obj.id === id;
      return obj;
    });
    console.log(JSON.stringify(updatedData));
    this.setState({
      data: updatedData
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <NewPost onSubmitPost={this.onAddNewPost} />
        </div>
        <div className="padding-top-15">
          {this.state.data.map(post => (
            <div className="border p-2 mt-2 mr-2 ml-2 mb-1" key={post.id}>
              <h3>{post.Name}</h3>
              <div className="blockquote-footer">
                Added by <b> Anonymous User</b> on {post.CreatedOn}
              </div>
              <p className="pt-2">{post.Content}</p>

              <button
                type="button"
                className="btn btn-outline-success btn-sm"
                onClick={() => this.onAddCommentClick(post.id)}
              >
                Add Comment
              </button>

              <div className="row">
                <div className="col">
                  <Comment
                    showComment={post.ShowCommentForm}
                    onCommentSubmit={this.onCommentSubmit}
                    id={post.id}
                  />
                </div>
                <div className="col" />
                <div className="col" />
                <div className="col" />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
