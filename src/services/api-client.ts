import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "016ddd240c0e45759ff76acb71e12297",
  },
});
