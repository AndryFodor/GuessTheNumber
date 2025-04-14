import { Alert, FlatList, StyleSheet, View, useWindowDimensions } from "react-native"
import { CustomButton } from "../components/CustomButton"
import { CustomTitle } from "../components/CustomTitle"
import { useEffect, useState } from "react"
import { NumberCont } from "../components/NumberCont"
import { GameOver } from "./GameOver"
import { Entypo } from '@expo/vector-icons'
import { colors } from "../utils/colors"
import { GuessItem } from "../components/GuessItem"
import { AVAILABLE_ATTEMPTS } from "../utils/constants"

let minBoundary = 0, maxBoundary = 100;
export const Game = ({ guessedNum, restart, changeTitle }) => {
    const generateRandomNumber = (min, max, exclude) => {
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        if (randomNum === exclude) return generateRandomNumber(min, max, exclude);
        else {
            return randomNum
        }
    }
    let { width, height } = useWindowDimensions()
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
        if (attemptsNumber > AVAILABLE_ATTEMPTS) {
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
    let content = <>
        <NumberCont>{currentGuess}</NumberCont>
        <CustomTitle>Higher or lower?</CustomTitle>
        <View style={styles.buttons}>
            <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'lower')}><Entypo name="minus" size={40} /></CustomButton>
            <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'higher')}><Entypo name="plus" size={40} /></CustomButton>
        </View>
        <View style={[styles.listContainer, { height: width > height ? '20%' : '40%' }]}>
            <FlatList data={numberLog} renderItem={el => <GuessItem guessNumber={numberLogLength - el.index - 1} guessValue={el.item} />} />
        </View>
    </>

    if (width > height) {
        content = <>
            <View style={styles.lContainer}>
                <View style={styles.numAndButtons}>
                    <NumberCont style={{ container__outside: { paddingVertical: '1%', paddingHorizontal: '9%' } }}>{currentGuess}</NumberCont>
                    <View style={styles.lButtons}>
                        <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'lower')}><Entypo name="minus" size={40} /></CustomButton>
                        <CustomButton styles={buttonStyles} clickHandler={nextGuessHandler.bind(this, 'higher')}><Entypo name="plus" size={40} /></CustomButton>
                    </View>
                </View>
                <View style={[styles.lListContainer, {height: height*0.45}]}>
                    <FlatList data={numberLog} renderItem={el => <GuessItem guessNumber={numberLogLength - el.index - 1} guessValue={el.item} />} />
                </View>
            </View>
        </>
    }

    if (winner) {
        return <GameOver winner={winner} attemptsNumber={attemptsNumber - 1} changeTitle={changeTitle} guessedNum={guessedNum} restart={restart} />
    }
    return <>{content}</>
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
    },
    //////////////////////landscape mode/////////////////////////////
    lContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lButtons: {
        gap: 15
    },
    numAndButtons: {
        width: '43%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    lListContainer: {
        borderLeftColor: colors.green600,
        borderLeftWidth: 3,
        marginHorizontal: '6%',
        paddingLeft: 5,
        alignSelf: 'flex-start'
    }
})
const buttonStyles = { customButton__text__outside: styles.customButton__text__outside, customButton__outside: styles.customButton__outside }