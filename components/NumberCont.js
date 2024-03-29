import { StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"

export const NumberCont = ({children, style}) => {
    const currentStyles = {...defaultStyles, ...style}
    return(
        <View style={[currentStyles.container, currentStyles.container__outside]}>
            <Text style={[currentStyles.numberText, currentStyles.numberText__outside]}>{children}</Text>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        borderColor: colors.primaryBlue,
        paddingVertical: '4%',
        paddingHorizontal: '7%',
        borderRadius: 56,
    },
    numberText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: colors.primaryWhite
    },
    container__outside: {},
    numberText__outside: {}
})