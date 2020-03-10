import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartUpScreen from "./pages/StartUpScreen";
import Porfolio from "./pages/Portfolio";

class App extends Component {
  state = {
    userNameIs: "",
    currentThemeIs: ""
  }

  componentDidMount() {
    // Create key value for local storage of default theme (my need to move this to portfolio page)
    localStorage.setItem("pageTheme", "retroWave");
    // Determine which page to load based on local storage results
    this.whichPageToLoad();
    // Get the get the user name from localStorage
    const currentUser = localStorage.getItem("userName");
    // Conditional to pass props down to Porfolio child component
    if (currentUser === null) {
      console.log("No User Name Exists.")
      console.log("If you are reading this, let's get in touch. I am looking for opportunities.");
    } else {
      console.log("You are a curious one, that's great.");
      console.log("Contact me and let's get your idea or project done.");
      this.setState({ userNameIs: currentUser });
    }
  }

  whichPageToLoad = () => {
    // If the local storage key of userName does not exist, go to StartUpScreen
    // component, here the user will set the userName key with the value of their name
    if (!localStorage.getItem("userName")) {
      return (
        <Route exact path="/" render={() => (
          <StartUpScreen />
        )}>
        </Route>
      )
    }
    // If the local storage key of userName exists and has a value go to the Portolio 
    // component instead
    else {
      return (
        <Route exact path="/" render={props => (
          <Porfolio
            {...props}
            userFirstName={this.state.userNameIs}
            userThemeChoice={this.state.currentThemeIs}>
          </Porfolio>
        )}>
        </Route>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <this.whichPageToLoad />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
