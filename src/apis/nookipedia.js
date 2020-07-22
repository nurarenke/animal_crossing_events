import axios from "axios";

// const KEY = "0cf50647-f883-40e7-92b7-c7c0fd369ad0";
// The proxy url is to get around the cors policy error
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://nookipedia.com/api/";
export default axios.create({
  baseURL: proxyurl + url,
  headers: {
    "X-API-KEY": process.env.REACT_APP_NOOKPEDIA,
  },
});
