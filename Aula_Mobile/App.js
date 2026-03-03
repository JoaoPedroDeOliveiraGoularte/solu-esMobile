import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import { Person, Joao } from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Person/>
      <Text>Open up App.js to start working on your app!</Text>
      <Profile/>
      <Joao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
