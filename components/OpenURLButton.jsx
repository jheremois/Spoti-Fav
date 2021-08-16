import React, { useCallback } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native'; 

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)
  
      if (supported) {
  
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}> 
        <Text style={styles.buttonText}>Listen on Spotify</Text> 
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#1db954',
      marginTop: 30,
      paddingHorizontal: 25,
      paddingVertical: 15,
      borderRadius: 200,
    },
    buttonText: {
      color: '#ffff',
      fontSize: 17,
      fontWeight: "bold",
    },
  });

export default OpenURLButton;