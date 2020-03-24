import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartUpScreen from "./pages/StartUpScreen";
import Porfolio from "./pages/Portfolio";

class App extends Component {
  state = {
    userNameIs: "",
    newName: "",
    isItinvalid: false,
    nameWasChangedSuccessfully: false
  }

  componentDidMount() {
    // Determine which page to load based on local storage results
    this.whichPageToLoad();
    // Get the get the user name from localStorage
    const currentUser = localStorage.getItem("userName");
    // Conditional to pass props down to Porfolio child component
    if (currentUser === null) {
      console.log("Go ahead and enter your first name.")
      console.log("If you are reading this, let's get in touch. I am looking for opportunities.");
    } else {
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
            handleNewNameSubmit={this.newUserNameSubmitted}
            newNameRequested={this.state.newName}
            handleNameChange={this.newUserNameBoxChange}
            changeNameValid={this.state.isItinvalid}
            nameSuccessChanged={this.state.nameWasChangedSuccessfully}
          >
          </Porfolio>
        )}>
        </Route>
      )
    }
  }

  newUserNameSubmitted = () => {
    let newNameLower = this.state.newName.trim().toLowerCase();
    if (newNameLower === "") {
      this.setState({ isItinvalid: true })
      setTimeout(() => this.setState({ isItinvalid: false }), 2000)
    } else {
      let newNameUpper = newNameLower.charAt(0).toUpperCase() + newNameLower.substring(1);
      // Save the new user name to local storage
      localStorage.setItem("userName", newNameUpper);
      // Set the new states to display instant change
      this.setState({ userNameIs: newNameUpper, newName: "", isItinvalid: false, nameWasChangedSuccessfully: true })
      setTimeout(() => this.setState({ nameWasChangedSuccessfully: false }), 2000)
    }
  }

  newUserNameBoxChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value, isItinvalid: false, nameWasChangedSuccessfully: false })
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
