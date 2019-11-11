import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        //   const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>

                <Button
                    title="Register"
                    onPress={() => (this.props as any).navigation.push('Registration')}
                />
            </View>
        );
    }
}