import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import { Button, Card } from 'react-native-paper';

export default function Test(){

  return(
    <View style = {styles.container}>
      <Text style={styles.txt}>TITULO</Text>
      <Card>
        <Card.Content style={styles.cards}>
          <Text style={styles.txt}>If a dedicated prop for a specific
            color is not available or the style prop does not allow color
            modification, you can customize it using the theme prop. It allows
            to override any color, within the component, based on the table above.
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