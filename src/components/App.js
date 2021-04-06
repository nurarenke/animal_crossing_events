import React from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import nookipedia from "../apis/nookipedia";

class App extends React.Component {
  state = { events: [] };

  componentDidMount() {
    const todaysDate = "may 2";
    this.findTodaysEvents();
    console.log("mounted");
  }

  findTodaysEvents = async () => {
    try {
      const res = await nookipedia.get("/today/");
      console.log("Success!");
      console.log(res.status);
      console.log(res.data);
    } catch (e) {
      if (e.response) {
        console.log("request made");
        console.log(e.response.status);
        console.log(e.response.data);
        console.log(e.response.headers);
      } else if (e.request) {
        console.log(e.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", e.message);
      }
      console.log(e);
    }

    // this.setState({
    //   events: res.data.events.message,
    // });
  };

  render() {
    return (
      <div className="ui container">
        <Header />
        <Calendar />
        <div>events:{this.state.events}</div>
      </div>
    );
  }
}

export default App;
