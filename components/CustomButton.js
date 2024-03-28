import { Pressable, StyleSheet, Text, View } from "react-native"

export const CustomButton = ({ children, clickHandler, styles }) => {
    const buttonStyles = styles || defaultStyles
    return (
        <View style={buttonStyles.customButton}>
            <Pressable
                onPress={clickHandler}
                android_ripple={{ color: '#abd2f9' }}
                style={({ pressed }) => pressed && defaultStyles.iPhone} >
                <Text style={buttonStyles.customButton__text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    customButton: {
        backgroundColor: '#53079f',
        borderRadius: 10,
        width: '35%'
    },
    customButton__text: {
        color: '#d5e8fa',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 8,
        textAlign: 'center'
    },
    iPhone: {
        opacity: .6
    }
})