import {View, TextInput, Button, Image, Text, StyleSheet} from 'react-native';

export default function Login() {
    return(
        <View style={styles.container}>
            <Image source={require('../Sources/wega.jpg')} style={styles.ft} />
            <Text style={styles.texto}>Login</Text>
            <TextInput
            placeholder='Usuário'
            placeholderTextColor={'#5d2323ff'}
            style={styles.txtInput}
            />
            <TextInput
            placeholder='Senha'
            placeholderTextColor={'#5d2323ff'}
            style={styles.txtInput}
            />
            <Button
            title='Entrar'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b84747ff'
    },
    texto:{
        fontSize: 30,
        color: '#5d2323ff',
        fontWeight: '100',
    },
    txtInput:{
        borderColor: '#5d2323ff',
        borderWidth: 2,
        padding: 5,
    },
    ft:{
        height: 250,
        width: 250,
        borderRadius: 20,
    }
})