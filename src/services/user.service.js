import axios from "axios";

const getData = () => {
  return axios.get("https://loup-codetest.firebaseio.com/result.json");
};

export const userService = { getData };
