import {View, Image, StyleSheet} from 'react-native';

export default function Images(){
    return(
        <View style={styles.view_image}>
              <Image style={styles.imagem} source={require('../Sources/wega.jpg')} />
              <Image style={styles.imagem} source={require('../Sources/wega2.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    view_image :{
        flexDirection: 'row',
        alignContent: 'space-around',
        gap: 30,
    },
     imagem:{
        height: 250,
        width: 150,
     },
})