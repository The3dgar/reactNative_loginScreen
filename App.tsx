import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Sticker } from './components/Sticker';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Sticker/>     
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor='grey'
        placeholder='jhon@email.com'
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor='grey'
        placeholder='password'
        secureTextEntry
      />
      
      <Text>Recovery password</Text>
      <Button/>
      
      <Text style={styles.subtitle}>Sign up!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopEndRadius: 50,
  },
  title: {
    fontSize: 60,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    paddingStart: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
