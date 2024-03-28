import { StyleSheet, View } from 'react-native';
import { StartGame } from './screens/StartGame';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={['#41c5ba', '#e3edf6', '#e3edf6', '#41c5ba']} style={styles.rootScreen}>
      <View style={styles.container}>
        <StartGame />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginHorizontal: '5%',
    height: '30%',
    backgroundColor: '#e3edf677',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.3
  },
  rootScreen: {
    backgroundColor: '#318c84',
    flex: 1,
    justifyContent: 'center'
  },
});
