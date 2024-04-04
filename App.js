import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { StartGame } from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient'
import { Game } from './screens/Game';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from './utils/colors';

export default function App() {
  const [guessedNum, setGuessedNum] = useState(-1);
  const [titleText, setTitleText] = useState('Guess My Number');
  const restart = () => {
    setGuessedNum(-1);
    setTitleText('Guess My Number');
  }
  const {width, height} = useWindowDimensions();
  // встановити властивості для елемента можна таким чином завдяки useWindowDimensions, не використовуючи при цьому StyleSheet. Деякі можливості втрачаються, але для вирішення поставленої задачі - адаптивних розмірів, це ідеальне рішення проблеми
  let titleTopMargin = {marginTop: height > 400 ? '20%' : '7%'}
  let mainContentContainet = {
    marginTop: height > width ? '10%' : '5%',
    paddingVertical: height > width ? '5%' : '2%',
    marginHorizontal: height > width ? '5%' : '10%'
  }

  // console.log(height);
  return (
    <LinearGradient colors={[colors.green500, colors.primaryWhite, colors.green500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dices.jpg')}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        {titleText && <Text style={[styles.mainTitle, titleTopMargin]}>{titleText}</Text>}
        <SafeAreaView style={[styles.container, mainContentContainet]}>
          {guessedNum >= 0
            ? <Game guessedNum={guessedNum} restart={restart} changeTitle={setTitleText} />
            : <StartGame startGame={setGuessedNum} />}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style='light' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  mainTitle: {
    // Якщо спробувати тут використати Dimensions API, то виникне пробелма, яка полягає в тому, що визначення розмірів виконується лише при першому редерингу компонента. Щоб уникнути це, можна спористатися хуком useWindowDimensions. При обертанні пристроя між горизонтальним та вертикальним положенням цей хук спрацьовуватиме кожний раз. Таким чином в нас кожний раз будуть актуальні розміри екрана. Таким чином тут не треба встановлювати відступи і розміри, якщо вони мають змінюватися в різних орієнтаціях.
    // marginTop: '7%',
    maxWidth: '75%',
    width: 400,
    // Два верхні стилі працюють таким чином, що користувач встановлює максимально допустиму ширину відповідного блоку. Якщо передана далі ширина в абсолютних одиницях або ширина самого екрану буде більша, ніж максимально допустима, ця властивість не дозволить елементу бути більшим все рівно, ніж 80%. Це робить UI більш адаптивним 
    color: colors.primaryWhite,
    textAlign: 'center',
    fontSize: 30,
    // хоча react native використовується для того, аби писати один код для різноманітних платформ, проте він дає можливість задавати різні стилі для різних поатформ. Для цього можна використати Platform АРІ, за допомогою якого можна визначати тип платформи, і в залежності від того задавати ті чи інші стилі. В прикладі нижче для андроїда в заголовків не буде бордера, а для афйонів - буде з шириною й піксель
    // borderWidth: Platform.OS === 'android' ? 0 : 1,
    borderWidth: Platform.select({ios: 1, android: 0}),
    borderColor: colors.primaryWhiteOpacity,
    alignSelf: 'center',
    paddingHorizontal: '5%',
    borderRadius: 20
  }
});


// Компонент SafeAreaView призначений для того, щоб програміст міг бути впевнений, що контект всередині нього не вийде на камеру смартфона в будь-якому випадку