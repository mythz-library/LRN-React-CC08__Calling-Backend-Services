import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // prettier-ignore
    const {data: posts} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ posts });
  }

  handleAdd = () => {
    console.log("Add");
  };

  handleUpdate = (post) => {
    console.log("Update", post);
  };

  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return (
      <div className="p-5">
        <button className="btn btn-primary px-4">Add</button>

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
                  <button className="btn btn-info btn-sm">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
