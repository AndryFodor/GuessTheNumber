import { StyleSheet, View, useWindowDimensions } from "react-native";
import { colors } from "../utils/colors";
import { CustomTitle } from "./CustomTitle";

export const GuessItem = ({ guessNumber, guessValue }) => {
    let {width, height} = useWindowDimensions();
    let landscapeStyles = {}
    if(width > height){
        landscapeStyles = {
            width: 'auto',
            padding: 0,
             
        }
    }
    return (
        <View style={[styles.itemContainer, landscapeStyles]}>
            <CustomTitle># {guessNumber}</CustomTitle>
            <View style={styles.innerContainer}>
                <CustomTitle styles={{ fontSize: 16, marginRight: 0 }}>Opponent`s guess is </CustomTitle>
                <CustomTitle styles={{ fontWeight: 'bold', marginLeft: 0 }}>{guessValue}</CustomTitle>
            </View>
        </View>
    )
}

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