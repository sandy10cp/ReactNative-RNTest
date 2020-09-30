import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { colors } from '../utils';
import InputText from '../component/InputText';
import Button from '../component/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
    const [form, setForm] = useState({
        phone: '',
        password: '',
    });

    const login = () => {
        console.log('Registrasi account', form);
        if (form.phone == '') {
            alert('Input phone number');
        } else if (form.password == '') {
            alert('Input password');
        } else {
            navigation.navigate('Home');
        }
    };

    const changeText = (value, key) => {
        setForm({
            ...form,
            [key]: value,
        });
    };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View
                style={{ height: 200, justifyContent: 'center', paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
                    LOGIN
					</Text>
            </View>
            <View style={styles.formRegis}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.space(70)} />
                    <InputText
                        placeholder="Phone"
                        keyboardType="numeric"
                        value={form.phone}
                        onChangeText={(value) => changeText(value, 'phone')}
                    />
                    <View style={styles.space(25)} />
                    <InputText
                        placeholder="Password"
                        value={form.password}
                        onChangeText={(value) => changeText(value, 'password')}
                        secureTextEntry={true}
                    />
                    <View style={styles.space(25)} />
                    <Button title="Login" onPress={login} />
                    <View style={styles.space(25)} />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.defaultBackGround,
    },
    formRegis: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    space: (value) => {
        return {
            height: value,
        };
    },
});
