import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // axios.get() returns a promise
    const promise = axios.get("https://jsonplaceholder.typicode.com/posts");

    // getting actual data object from promise object
    const response = await promise;
    console.log(response);
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
            <tr>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
