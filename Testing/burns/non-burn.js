import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function NonBurn(){
    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.boldText}>NON-BURN</Text>
            </View>

            <View style={styles.picture}>
                <Image source={require('../assets/pictureTaken/captured-photo.jpg')}
                       style = {{width:300, height:400}}
                />
            </View>

            <View >
                <Text style={styles.boldText}>This is not a burn.</Text>
                <Text style={styles.textBody}>Please proceed to the nearest clinic or hospital to seek for medical treatment as soon as possible.{"\n"}</Text>
            </View>

        </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, 
    header: {
        backgroundColor: 'grey',
     },
  
    boldText: {
        fontWeight: 'bold',
        margin: 20,
    },
  
    picture:{
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
      alignItems: 'center',
    },

    textBody:{
        paddingLeft: 20,
    },

})