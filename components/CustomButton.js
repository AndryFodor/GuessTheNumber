import { Pressable, StyleSheet, Text, View } from "react-native"

export const CustomButton = ({ children, clickHandler, styles }) => {
    const buttonStyles = styles ? {...defaultStyles, ...styles} : defaultStyles;
    return (
        <View style={[buttonStyles.customButton, buttonStyles.customButton__outside]}>
            <Pressable
                onPress={clickHandler}
                android_ripple={{ color: '#abd2f9' }}
                style={({ pressed }) => pressed && [defaultStyles.iPhone, defaultStyles.iPhone__outside]} >
                <Text style={[buttonStyles.customButton__text, buttonStyles.customButton__text__outside]}>{children}</Text>
            </Pressable>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    customButton: {
        backgroundColor: '#079f92',
        borderRadius: 12,
        width: '30%',
        // ця властивість використовується для приховування ефекта хвиль з Pressable компонента на цей
        overflow: 'hidden'
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
    },
    customButton__outside: {},
    customButton__text__outside: {},
    iPhone__outside: {}
})