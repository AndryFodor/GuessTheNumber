import { StyleSheet, View } from 'react-native';
import { StartGame } from './screens/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginHorizontal: '5%',
    height: '20%',
    backgroundColor: '#bddaf777',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
