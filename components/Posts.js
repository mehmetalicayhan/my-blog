import { Component } from "react";
import Post from "./Post";
class Posts extends Component {
  state = {
    posts: []
  };
  // Get Posts data and pass them props to Post component
  // After that in props component Show the data
  // Design Post Detail Page
  render() {
    return (
      <div>
        {this.state.posts.map((post, i) => {
          <Post data={post} key={i} />;
        })}
      </div>
    );
  }
}

export default Posts;
