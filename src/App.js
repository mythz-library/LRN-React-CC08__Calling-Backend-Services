import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

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

        <table class="table mt-5">
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
