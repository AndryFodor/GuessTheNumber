import { Dimensions, StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"

export const NumberCont = ({children, style}) => {
    const currentStyles = {...defaultStyles, ...style}
    return(
        <View style={[currentStyles.container, currentStyles.container__outside]}>
            <Text style={[currentStyles.numberText, currentStyles.numberText__outside]}>{children}</Text>
        </View>
    )
}

// Dimensions АРІ допомагає реалізовувати адаптивну і відповідальну верстру додатку. З її допомогою можна отримати основні 4 розмірності, які використовуються як розміри елементів. Таким чином за допомогою різноманітних махінацій можна встановлювати конкретні розміни ширини, висоти елементів для тих чи інших розмірів екрану пристроя
const deviceWidth = Dimensions.get('window').width;
const deviceFontScale = Dimensions.get('window').fontScale;


const defaultStyles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        borderColor: colors.primaryBlue,
        paddingVertical: deviceWidth > 390 ? '4%' : '1.5%',
        paddingHorizontal: deviceWidth > 390 ? '7%' : '3%',
        borderRadius: 56,
    },
    numberText: {
        fontSize: deviceFontScale*60,
        fontWeight: 'bold',
        color: colors.primaryWhite
    },
    container__outside: {},
    numberText__outside: {}
})