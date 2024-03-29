import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { StartGame } from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient'
import { Game } from './screens/Game';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from './utils/colors';

export default function App() {
  const [guessedNum, setGuessedNum] = useState(-1);
  return (
    <LinearGradient colors={[colors.green500, colors.primaryWhite, colors.green500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dices.jpg')}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {guessedNum >= 0
            ? <Game guessedNum={guessedNum} restart={setGuessedNum.bind(this, -1)}/>
            : <StartGame startGame={setGuessedNum} />}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style='light' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    marginHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: colors.primaryWhiteOpacity,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.3
  },
  rootScreen: {
    backgroundColor: colors.green600,
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  }
});


// Компонент SafeAreaView призначений для того, щоб програміст міг бути впевнений, що контект всередині нього не вийде на камеру смартфона в будь-якому випадку