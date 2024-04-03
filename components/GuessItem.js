import { StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";
import { CustomTitle } from "./CustomTitle";

export const GuessItem = ({ guessNumber, guessValue }) => <View style={styles.itemContainer}>
    <CustomTitle># {guessNumber}</CustomTitle>
    <View style={styles.innerContainer}>
        <CustomTitle styles={{ fontSize: 16, marginRight: 0 }}>Opponent`s guess is </CustomTitle>
        <CustomTitle styles={{ fontWeight: 'bold', marginLeft: 0 }}>{guessValue}</CustomTitle>
    </View>
</View>

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: colors.primaryBlueOpacity,
        marginVertical: '2%',
        padding: '2%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.green700
    },

})