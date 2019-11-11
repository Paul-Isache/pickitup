import React from 'react';
import { View, Text, Button } from 'react-native';

import Input from '../components/Input'

export default class Registration extends React.Component {
    static navigationOptions = {
        title: 'Register',
        // headerLeft: null
    };

    state = {
        username: '',
        password: '',
        accessCode: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        //   const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding: 10 }} theme="dark">
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

                <Button
                    title="Login"
                    onPress={() => (this.props as any).navigation.navigate('Login')}
                />
            </View>
        );
    }
}