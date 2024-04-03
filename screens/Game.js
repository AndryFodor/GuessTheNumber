import { Alert, FlatList, StyleSheet, View } from "react-native"
import { CustomButton } from "../components/CustomButton"
import { CustomTitle } from "../components/CustomTitle"
import { useEffect, useState } from "react"
import { NumberCont } from "../components/NumberCont"
import { GameOver } from "./GameOver"
import { Entypo } from '@expo/vector-icons'
import { colors } from "../utils/colors"
import { GuessItem } from "../components/GuessItem"

let minBoundary = 0, maxBoundary = 100;
export const Game = ({ guessedNum, restart, changeTitle }) => {
    const generateRandomNumber = (min, max, exclude) => {
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        if (randomNum === exclude) return generateRandomNumber(min, max, exclude);
        else {
            return randomNum
        }
    }
    let initialGuess = generateRandomNumber(minBoundary, maxBoundary, guessedNum)

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [winner, setWinner] = useState('');
    const [attemptsNumber, setAttemptsNumber] = useState(0);
    const [numberLog, setNumberLog] = useState([]);
    let numberLogLength = numberLog.length;
    useEffect(() => {
        changeTitle("Opponent`s guess");
    }, [])
    useEffect(() => {
        setAttemptsNumber(prevState => prevState + 1);
        setNumberLog(prev => [currentGuess, ...prev])
        if (currentGuess === guessedNum) {
            setWinner('Victory');
            minBoundary = 0;
            maxBoundary = 100;
        }
        if (attemptsNumber > 5) {
            setWinner('Defeat')
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
        setCurrentGuess(generateRandomNumber(minBoundary, maxBoundary, currentGuess));
    }

    if (winner) {
        return <GameOver winner={winner} attemptsNumber={attemptsNumber - 1} changeTitle={changeTitle} guessedNum={guessedNum} restart={restart} />
    }
    return (
        <>
            <NumberCont>{currentGuess}</NumberCont>
            <CustomTitle>Higher or lower?</CustomTitle>
            <View style={styles.buttons}>
                <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'lower')}><Entypo name="minus" size={40} /></CustomButton>
                <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'higher')}><Entypo name="plus" size={40} /></CustomButton>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={numberLog} renderItem={el => <GuessItem guessNumber={numberLogLength - el.index - 1} guessValue={el.item}/>} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        height: '40%',
        borderLeftColor: colors.green600,
        borderLeftWidth: 3,
        marginHorizontal: '10%',
        paddingLeft: 5,
        marginTop: '5%',
        alignSelf: 'flex-start'
    },
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
        paddingHorizontal: '2%',
    }
})
const buttonStyles = { customButton__text__outside: styles.customButton__text__outside, customButton__outside: styles.customButton__outside }