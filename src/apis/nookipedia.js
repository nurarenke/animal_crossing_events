import axios from "axios";

export default axios.create({
  baseURL: "https://nookipedia.com/api",
  headers: {
    "X-API-KEY": process.env.REACT_APP_NOOKPEDIA,
  },
});
