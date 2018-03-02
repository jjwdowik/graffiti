import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

// a type representing true boolean
var True = t.refinement(t.Boolean, function (n) {
  return n == true;
});

const User = t.struct({
  email: t.String,
  password: t.String,
  terms: True
});

const options = {
  fields: {
    terms: {
      label: 'Agree to Terms',
    },
  },
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.handleSignUp(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up Please</Text>
        <Form type={User} ref="form" options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit}/>
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
