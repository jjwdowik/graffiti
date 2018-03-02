import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
  }


  handleSubmit() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.handleLogin(value);
    }
  }

  showSignUp() {
    this.props.showSignUp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Log In Please</Text>
        <Form type={User} ref="form" />
        <Button title="Login" onPress={this.handleSubmit}/>
        <Button title="or Sign Up" onPress={this.showSignUp}/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  }
});
