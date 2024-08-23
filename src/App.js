import React, { Component } from "react";
import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    // Creates temporary data object
    const obj = { title: "a", body: "b" };

    const { data: post } = await axios.post(apiEndpoint, obj);

    // Bringing the newly created post to the front of the list
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "Updated Title";

    await axios.put(`${apiEndpoint}/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    // Store origina state temporarily as backup
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(apiEndpoint + "/" + post.id);

      // To simulate an error, turn off the network connection or throw an error
      throw new Error("");
    } catch (error) {
      alert("Something failed while deleting a post!");

      // When error occurs, replace posts by its original state
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <div className="p-5">
        <button onClick={this.handleAdd} className="btn btn-primary px-4">
          Add
        </button>

        <table className="table mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    onClick={() => this.handleUpdate(post)}
                    className="btn btn-info btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
