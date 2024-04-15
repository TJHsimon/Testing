import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Second(){
    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.boldText}>SECOND DEGREE BURN</Text>
            </View>

            <View style={styles.picture}>
                <Image source={require('../assets/pictureTaken/captured-photo.jpg')}
                       style = {{width:300, height:400}}
                />
            </View>

            <View style={styles.bodyHeader}>
                <Text style={styles.boldText}>Ingredients/Tools</Text>
            </View>

            <View>
                <Text style={styles.textBody}>{"\n"}1. Cold Water{"\n"}</Text>
                <Text style={styles.textBody}>2. Petroluem Jelly{"\n"}</Text>
                <Text style={styles.textBody}>3. Nonstick/Sterile Bandage{"\n"}</Text>
                <Text style={styles.textBody}>4. Pain Medication{"\n"}</Text>
            </View>

            <View style={styles.bodyHeader}>
                <Text style={styles.boldText}>Steps</Text>
            </View>

            <View>
                <Text style={styles.smallBold}>1. Cool the burn.{"\n"}</Text>
                <Text style={styles.textBody}>Use cool water to gently wash your burn. 
                      Try to keep your burn area under water for at least five minutes, up to 30 minutes. Gently pat the burn dry with a clean towel.{"\n"}</Text>
                <Text style={styles.smallBold}>2. Apply petroluem jelly two to three times daily{"\n"}</Text>
                <Text style={styles.textBody}>Do not apply ointments, toothpaste or butter to the burn, as these may cause an infection. Do not apply topical antibiotics.{"\n"}</Text>
                <Text style={styles.smallBold}>3. Cover the burn with a nonstick, sterile bandage{"\n"}</Text>
                <Text style={styles.textBody}> If blisters form, let them heal on their own while keeping the area covered. Do not pop the blisters.{"\n"}</Text>
                <Text style={styles.textBody}> Cover your burn with a clean bandage or wound dressing like non-stick gauze.{"\n"}</Text>
                <Text style={styles.textBody}> Avoid touching your burn or placing clothing on your skin that can cause friction or rub against your wound.{"\n"}</Text>
                <Text style={styles.smallBold}>4. Consider taking pain medication{"\n"}</Text>
                <Text style={styles.textBody}>Acetaminophen or ibuprofen can help relieve the pain and reduce inflammation.{"\n"}</Text>
                <Text style={styles.smallBold}>5. Change bandage{"\n"}</Text>
                <Text style={styles.textBody}>Change your bandage at least once daily.{"\n"}</Text>
            </View>

            <View style={styles.bodyHeader}>
                <Text style={styles.boldText}>When To See Doctor?</Text>
            </View>

            <View>
                <Text style={styles.smallBold}>1. The burnt area covers a large area of your skin.</Text>
                <Text style={styles.smallBold}>2. Affects your ability to use certain parts of your body.</Text>
                <Text style={styles.smallBold}>3. Shows signs of an infection</Text>
                <Text style={styles.smallBold}>4. Children younger than 5 years old, people above 70 years old or people with a compromised immune system should have their burns treated by a healthcare provider{"\n"}</Text>
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
  backgroundColor: 'orange',
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

smallBold:{
    fontWeight:'bold',
    padding: 10,
},
textBody:{
  paddingLeft: 10,
},
bodyHeader: {
    backgroundColor: 'grey',
}
})