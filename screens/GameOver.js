import { useEffect } from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { CustomButton } from "../components/CustomButton";
import { colors } from "../utils/colors";
import { CustomTitle } from "../components/CustomTitle";

export const GameOver = ({ changeTitle, guessedNum, attemptsNumber, restart, winner }) => {
    let imgPath = require('../assets/images/success.jpg');
    if(winner === 'Defeat')
    imgPath = require('../assets/images/failed.jpg');
    useEffect(() => {
        changeTitle("Game over")
    }, []);
    return (
        <View>
            <CustomTitle styles={{alignSelf: 'center', fontWeight: 'bold', fontSize: 50}}>{winner}</CustomTitle>
            <View style={styles.imageContainer}>
                <Image source={imgPath} style={styles.image} />
            </View>
            <View style={styles.describeContainer}>
                <CustomTitle>Your phone {winner === 'Victory' ? 'won' : 'lost'}!</CustomTitle>
                <CustomTitle styles={{fontSize: 14, marginBottom: 0}}>The number it should has guessed is</CustomTitle>
                <CustomTitle styles={{margin: 0, fontWeight: 'bold'}}>{guessedNum}</CustomTitle>
                <CustomTitle styles={{fontSize: 18}}>You used {attemptsNumber} attempts</CustomTitle>
                {winner === 'Victory' ? null : <CustomTitle styles={{color: 'red', fontSize: 14, marginTop: 0}}>(5 is max possible attempts)</CustomTitle>}
                <CustomButton clickHandler={restart} styles={{ customButton__outside: { width: '100%' } }}>Try again?</CustomButton>
            </View>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width > 390;

const styles = StyleSheet.create({
    imageContainer: {
        width: deviceWidth ? 200 : 140,
        height: deviceWidth ? 200 : 140,
        borderRadius: deviceWidth ? 100 : 70,
        borderColor: colors.green700,
        borderWidth: 3,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    describeContainer: {
        // height: 300,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center'
    }
})