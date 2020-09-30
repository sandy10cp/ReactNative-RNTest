import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const InputText = ({ placeholder, ...rest }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderColor: 'gray',
        // borderWidth: 1,
        // borderColor: colors.defaultBackGround,
        paddingHorizontal: 10,
        fontSize: 17,
        borderRadius: 10,
        backgroundColor: '#def4ff',
        color: 'gray',
        shadowColor: "#def4ff",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 5,
    }
})
