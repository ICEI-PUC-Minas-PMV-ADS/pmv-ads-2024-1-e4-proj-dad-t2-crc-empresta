import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
    <View style={styles.imagePlaceholder} />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Login"
        color="#19547F" 
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#e6edf3',
    paddingHorizontal: 20,
    paddingTop: 50, 
  },
  imagePlaceholder: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    backgroundColor: 'lightgray', // adicionar o logo aqui
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: 'poppins-regular', 
  },
});

export default LoginScreen;