import React, { Component } from "react";
import NewPost from "./new-post";
class Post extends Component {
  state = {
    identifier: 2,
    data: [
      {
        id: 1,
        Name: "Some cool blog post title given by the user",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!",
        CreatedOn: new Date(1548132010000)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")
      },
      {
        id: 2,
        Name: "Some another cool blog post title given by the user",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!",
        CreatedOn: new Date(1548328285844)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")
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
      CreatedOn: new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    });

    console.log(this.state);

    this.setState({
      data: this.state.data
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
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
