// HttpService Module

import axios from "axios";
import { toast } from "react-toastify";

// Handling unexpected errors
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");

    // Imported "toast" is a function, In JS functions are objects
    // so we can use toast messages like, `toast("An unexpected error occurred.");`
  }

  // Return a rejected Promise
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
