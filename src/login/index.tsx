import React from 'react';
import { View, Text, Image, Modal, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

import { common } from '../theme';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  state = {
    username: '',
    password: '',
    authCode: '',
    auth: {
      signInErrorMessage: '',
      isAuthenticating: '',
      signInError: '',
      showSignInConfirmationModal: ''
    }
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
  }

  confirm() {
    const { authCode } = this.state
  }

  render() {
    const { auth: {
      signInErrorMessage,
      isAuthenticating,
      signInError,
      showSignInConfirmationModal
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
          <Text style={[styles.greeting]}>
            Welcome back,
          </Text>
          <Text style={[styles.greeting2]}>
            sign in to continue
          </Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="User Name"
              type='username'
              onChangeText={this.onChangeText}
              value={this.state.username}
            />
            <Input
              placeholder="Password"
              type='password'
              onChangeText={this.onChangeText}
              value={this.state.password}
              secureTextEntry
            />
          </View>

          <Button
            isLoading={isAuthenticating}
            title='Sign In'
            onPress={this.signIn.bind(this)}
          />
          <Button
            isLoading={false}
            title='Register'
            onPress={() => (this.props as any).navigation.navigate('Registration')}
          />

          <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>Error logging in. Please try again.</Text>
          <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>{signInErrorMessage}</Text>
          {
            !!showSignInConfirmationModal && (
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
