import React from 'react';
import { StyleSheet, FlatList, Dimensions} from 'react-native';
import Artist from "./Artist";
import ArtistModel from "../model/ArtistModel";

const ArtistsList = () => {
    return (
        <FlatList
            style={styles.list}
            data={ArtistModel}
            renderItem={({item})=> <Artist singer={item}/>}
            keyExtractor={ArtistModel => ArtistModel.link}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
        />
    );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
});


export default ArtistsList;
