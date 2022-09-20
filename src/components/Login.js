import React from 'react';
import {
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const Login = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 200,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.btnLogin}>
            <Button title="Login" color="red" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btnLogin: {
    width: 100,
  },
});

export default Login;
