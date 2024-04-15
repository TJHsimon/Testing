import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Third(){
    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.boldText}>THIRD DEGREE BURN</Text>
            </View>

            <View style={styles.picture}>
                <Image source={require('../assets/pictureTaken/captured-photo.jpg')}
                       style = {{width:300, height:400}}
                />
            </View>

            <View style={styles.bodyHeader}>
                <Text style={styles.boldText}>WARNING!!!</Text>
                <Text style={styles.textWarningBody}>CALL 999 OR GO IMMEDIATELY TO THE NEAREST HOSPITAL.{"\n"}</Text>
            </View>

            <View>
                <Text style={styles.smallBold}>***This is serious injury unlike first and second degree burn.{"\n"}</Text>
                <Text style={styles.smallBold}>***Aware and proceed the following steps carefully.{"\n"}</Text>
                <Text style={styles.textBody}>1. Do not remove clothing stuck to the burn{"\n"}</Text>
                <Text style={styles.textBody}>2. Do not soak the burned area in water{"\n"}</Text>
                <Text style={styles.textBody}>3. Cover the burn with a cool clean cloth or bandage{"\n"}</Text>
                <Text style={styles.textBody}>4. Keep the burn raise above the level of heart{"\n"}</Text>
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
  backgroundColor: 'red',
},

boldText: {
  fontWeight: 'bold',
  margin: 20,
},

picture:{
  backgroundColor: '#fff',
  padding: 20,
},

smallBold:{
    fontWeight:'bold',
    padding: 10,
},
textBody:{
  paddingLeft: 10,
},
textWarningBody:{
  paddingLeft: 20,
},
bodyHeader: {
    backgroundColor: 'grey',
}
})