import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import "./App.css";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "loading",
      toggleNav: false,
    };
    this.handletoggle = this.handletoggle.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ status: "active" });
    }, 2000);
  }
  handletoggle() {
    this.setState((prev) => {
      return { toggleNav: !prev.toggleNav };
    });
  }

  render() {
    return (
      <div>
        {this.state.status === "loading" ? (
          <Loader />
        ) : this.state.status === "active" ? (
          <div>
            <Header
              handletoggle={this.handletoggle}
              toggleNav={this.state.toggleNav}
            />
            <Main />
            <Contact />
            <Footer />
          </div>
        ) : (
          <div>
            <h1>Please Reload</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
