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
    height: '30%',
    backgroundColor: '#bddaf777',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.3
  },
});
