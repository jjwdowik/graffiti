import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ActivityIndicator, Button } from 'react-native';

import firebase from 'react-native-firebase';

import Login from './screens/Login';
import SignUp from './screens/SignUp';

class App extends React.Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
      loading: true,
      showSignUp: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loading: false, user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  handleLogin(data) {
    console.log("handleLogin");
    console.log(data);
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        console.log("error on creating login user");
        console.log(error);
      });
  }

  handleSignUp(data) {
    console.log("handleSignUp");
    console.log(data);
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(data.email, data.password)
      .then((user) => {
      })
      .catch((error) => {
        const { code, message } = error;
        console.log("error on creating new user");
        console.log(error);
      });
  }

  showSignUp() {
    this.setState({ showSignUp: true });
  }

  handleSignOut() {
    firebase.auth().signOut()
      .then((user) => {
        this.setState({ showSignUp: false });
      })
      .catch((error) => {
        const { code, message } = error;
        console.log("error on creating new user");
        console.log(error);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    if (false || !this.state.user) {
      if (this.state.showSignUp) {
        return (
          <SignUp handleSignUp={this.handleSignUp}/>
        );
      } else {
        return (
          <Login handleLogin={this.handleLogin} showSignUp={this.showSignUp}/>
        );
      }
    }

    console.log(firebase.auth().currentUser);
    return (
      <View style={styles.container}>
        <Text>Welcome to my awesome app {this.state.user.email}!</Text>
        <Button onPress={this.handleSignOut} title="Sign Out"/>
      </View>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
