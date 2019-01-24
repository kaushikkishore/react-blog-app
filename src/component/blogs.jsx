import React, { Component } from "react";

class Blogs extends Component {
  state = {
    blogsList: [
      {
        heading: "This is heading for the first blogpost",
        content: "Blog content here on",
        fullContet: "Full content of the blog in the details",
        Author: "John Doe",
        BlogDate: "2019-01-01"
      }
    ]
  };
  render() {
    return <React.Fragment />;
  }
}

export default Blogs;
