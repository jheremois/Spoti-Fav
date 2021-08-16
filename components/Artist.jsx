import React, { useCallback } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';

import OpenURLButton from "./OpenURLButton";

const Artist = (props) =>{

  const {img, name, link} = props.singer

  return(
    <View style={styles.card}>
        <ImageBackground source={img} resizeMode="cover" style={styles.bgimg}>
        <Text style={styles.name}>{name}</Text>
        <OpenURLButton url={link}></OpenURLButton>
        </ImageBackground>
    </View>
  )

}

const styles = StyleSheet.create({

  card: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  name: {
    marginTop: '100%',
    textShadowColor: '#1B2021',
    textShadowRadius: 5,
    fontSize: 40,
    color: '#ffff',
    fontWeight: "bold",
  },
  bgimg: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Artist;