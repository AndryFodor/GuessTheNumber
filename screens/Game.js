import { Alert, StyleSheet, Text, View } from "react-native"
import { CustomButton } from "../components/CustomButton"
import { CustomTitle } from "../components/CustomTitle"
import { useEffect, useState } from "react"
import { NumberCont } from "../components/NumberCont"

let minBoundary = 0, maxBoundary = 100;
export const Game = ({ guessedNum, restart }) => {
    const generateRandomNumber = (min, max, exclude) => {
        let randomNum = Math.floor(Math.random() * (max - min)) + min;

        if (randomNum === exclude) return generateRandomNumber(min, max, exclude);
        else return randomNum
    }
    let initialGuess = generateRandomNumber(minBoundary, maxBoundary, guessedNum)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [winner, setWinner] = useState(false);
    const [attemptsNumber, setAttemptsNumber] = useState(-1);
    useEffect(() => {
        console.log("Interval = ", minBoundary, maxBoundary, "\nNumber = ", guessedNum);
        setAttemptsNumber(prevState => prevState + 1);
        if (currentGuess === guessedNum) {
            setWinner(true);
            minBoundary = 0;
            maxBoundary = 100;
        }
    }, [currentGuess])

    const nextGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < guessedNum || direction === 'higher' && currentGuess > guessedNum) {
            Alert.alert('You lie', 'You message is not at this interval', [{ text: 'Be honest', style: 'cancel' }]);
            return;
        }
        if (direction === 'higher') minBoundary = currentGuess;
        else maxBoundary = currentGuess;
        console.log(minBoundary, maxBoundary);
        setCurrentGuess(generateRandomNumber(minBoundary, maxBoundary, currentGuess));
    }

    if (winner) {
        return (
            <View>
                <Text>You are winner!</Text>
                <Text>The number you have guessed is {guessedNum}</Text>
                <Text>You used {attemptsNumber} attempts.</Text>
                <CustomButton clickHandler={restart}>Try again?</CustomButton>
            </View>
        )
    }
    return (
        <>
            <CustomTitle>Opponent`s guess</CustomTitle>
            <NumberCont>{currentGuess}</NumberCont>
            <Text>Higher or lower?</Text>
            <View style={styles.buttons}>
                <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'lower')}>–</CustomButton>
                <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'higher')}>+</CustomButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        marginTop: '5%',
        gap: 10
    },
    customButton__outside: {
        borderRadius: 30,
        width: 'auto'
    },
    customButton__text__outside: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingVertical: 5
    },
})
const buttonStyles = { customButton__text__outside: styles.customButton__text__outside, customButton__outside: styles.customButton__outside }