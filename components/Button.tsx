import { StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGradient = () => {
  const onPress = () => {
    alert('Ingresando...');
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#7762ff', '#776fff']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.button}>
        <Text style={styles.text}>SIGN IN</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ButtonGradient;

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: 'center',
    marginTop: 60,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: '80%',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
