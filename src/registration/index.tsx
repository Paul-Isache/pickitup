import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

// import { Auth } from 'aws-amplify'
import { common, colors } from '../theme'

import Input from '../components/Input'
import Button from '../components/Button'

const initialState = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
  authCode: '',
  auth: {
    showSignUpConfirmationModal: false,
    isAuthenticating: false,
    signUpError: false,
    signUpErrorMessage: false
  }
}

export default class Registration extends Component<{}> {
  static navigationOptions = {
    // title: 'Register',
    header: null,
    headerTintColor: colors.primary
  }

  state = initialState

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signUp() {
    const { username, password, email, phone_number } = this.state
  }

  confirm() {
    const { authCode, username } = this.state
  }

  // componentWillReceiveProps(nextProps) {
  //   // const { auth: { showSignUpConfirmationModal }} = nextProps
  //   // if (!showSignUpConfirmationModal && this.props.auth.showSignUpConfirmationModal) {
  //   //   this.setState(initialState)
  //   // }
  // }

  render() {
    const { auth: {
      showSignUpConfirmationModal,
      isAuthenticating,
      signUpError,
      signUpErrorMessage
    } } = this.state
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <KeyboardAvoidingView style={styles.container} behavior='position' enabled>
          <View style={styles.heading}>
            <Image
              source={require('../assets/shape.png')}
              style={styles.headingImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.greeting}>
            Welcome,
          </Text>
          <Text style={styles.greeting2}>
            sign up to continue
          </Text>

          <View style={styles.inputContainer}>
            <Input
              value={this.state.username}
              placeholder="User Name"
              type='username'
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.email}
              placeholder="Email"
              type='email'
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.password}
              placeholder="Password"
              secureTextEntry
              type='password'
              onChangeText={this.onChangeText}
            />
            <Input
              placeholder="Phone Number"
              type='phone_number'
              keyboardType='numeric'
              onChangeText={this.onChangeText}
              value={this.state.phone_number}
            />
          </View>

          <Button
            title='Sign Up'
            onPress={this.signUp.bind(this)}
            isLoading={isAuthenticating}
          />
          
          <Text style={[styles.errorMessage, signUpError && { color: 'black' }]}>Error logging in. Please try again.</Text>
          <Text style={[styles.errorMessage, signUpError && { color: 'black' }]}>{signUpErrorMessage}</Text>
          {
            showSignUpConfirmationModal && (
              <Modal>
                <View style={styles.modal}>
                  <Input
                    placeholder="Authorization Code"
                    type='authCode'
                    onChangeText={this.onChangeText}
                    value={this.state.authCode}
                    keyboardType='numeric'
                  />
                  <Button
                    title='Confirm'
                    onPress={this.confirm.bind(this)}
                    isLoading={isAuthenticating}
                  />
                </View>
              </Modal>
            )
          }
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({...common as any});