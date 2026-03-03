import {View, Text, Image} from 'react-native'

export function Joao(){
    return(
        <View>
            <Text>Minha imagem</Text>
            <Image source={require('../Sources/wega.jpg')} />
        </View>
    )
}

export function Person(){
    return(
        <View>
            <Text>Meu componente pessoa</Text>
        </View>
    )
}

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente</Text>
        </View>
    )
}