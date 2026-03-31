import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import { pessoafile, pessoaslista } from '../components/pessoas';


export default function Pessoa() {
  
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO LEGAL</Text>

      {pessoaslista.map((pessoafile) => (

        <Card >
          <Card.Cover source={{ uri: pessoafile.image }} />
          <Card.Content style={styles.cards}>
            <Text style={styles.txt}>Nome: {pessoafile.name}</Text>
            <Text style={styles.txt}>Idade: {pessoafile.idade}</Text>
            <Text style={styles.txt}>Cidade: {pessoafile.cidade}</Text>
            <Text style={styles.txt}>Profissão: {pessoafile.profissao}</Text>
          </Card.Content>  
        </Card>  
      ))} 

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
  
  justifyContent: 'center',
  alignItems: 'center'
  },
  txt:{
    fontSize: 20,
    textAlign: 'justify'
  },
  img:{
    width: 300,
    height: 300
  },
  cards:{
    alignItems: 'center',
  
  
  }

  
})