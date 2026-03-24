import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { drivers } from './components/drivers';

export default function App(){

  const motorista = drivers[0]

  return(
    <View style = {styles.container}>
      <Text style={styles.txt}>TITULO</Text>
      
      <Card>
        <Card.Content sources={{ uri: motorista.image }}/>
        <Card.Content style={styles.cards}>
          <Text style={styles.txt}>
            {motorista.name}
          </Text>

          <Text style={styles.txt}>
            {motorista.description}
          </Text>

          <Text style={styles.txt}>
            {motorista.team}
          </Text>

          <Text style={styles.txt}>
            {motorista.country}
          </Text>

          <Text style={styles.txt}>{'⭐'.repeat
            (motorista.stars)}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 20
  },
  img:{
    width: 200,
    height: 200
  },
  cards:{
    alignItems: 'center',
  }
})

//-----------------------

// import { View, Text, StyleSheet } from 'react-native'
// import { useState } from 'react';
// import { Button } from 'react-native-paper';

// export default function App(){

//   const [mensagem, setMensagem] = useState('Olá')
//   const [count, setCount] = useState(0)

//   function TrocaMsg(){
//     if (mensagem == 'Olá'){
//       setMensagem('Oi, trocamos de mensagem!')
//     }else{
//       setMensagem('Olá')
//     }
//   }

//   function Contador(){
//     setCount(count + 1)
//   }

//   function Decrementador(){
//     if (count > 0){
//       setCount(count - 1)
//     }
//   }

//   return(
//     <View style = {styles.container}>
//       <Text style = {styles.txt}>{mensagem}</Text>
//       {/* <Button
//       title='Clique aqui'
//       color={'#f1e6d2ff'}
//       onPress={TrocaMsg}
//       /> */}
//       <Button
//       buttonColor={'#751333ff'}
//       onPress={TrocaMsg}
//       textColor='#fff'
//       >
//         Clique aqui
//       </Button>

//       <Text style = {styles.txt}>{count}</Text>

//       <View style = {styles.row}>
//         {/* <Button
//         title='Contar'
//         color={'#c0a26bff'}
//         onPress={Contador}
//         /> */}

//         <Button
//         buttonColor={'#751333ff'}
//         onPress={Contador}
//         textColor='#fff'
//         >
//           Contar
//         </Button>


//         {/* <Button
//         title='Decrementar'
//         color={'#c0a26bff'}
//         onPress={Decrementador}
//         /> */}

//         <Button
//         buttonColor={'#751333ff'}
//         onPress={Decrementador}
//         textColor='#fff'
//         >
//           Decrementar
//         </Button>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   txt:{
//     fontSize: 30
//   },
//   row:{
//     flexDirection: 'row',
//     width: '50%',
//     justifyContent: 'space-around'
//   }
// })

//---------------------------------------------------------

// import { StyleSheet, Text, View, Image } from 'react-native';
// import Profile from './components/Profile';
// import { Person, Joao } from './components/Profile';
// import Images from './components/Image';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Person/> */}
//       {/* <Text>Hello world!</Text> */}
//       <Text style={styles.txt_title}>Adoção de Wegas</Text>
//       {/* <Profile/> */}
//       <Images></Images>
//       <Images></Images>
//       {/* <Joao/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'center',
//     backgroundColor: '#b375ffff',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   view_image: {
//     flexDirection: 'row',
//     alignContent: 'space-around',
//     gap: 10,
//   },
//   txt_title:{
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#6f00ffff',
//   },
//   imagem:{
//     height: 250,
//     width: 150,
//   },
// });