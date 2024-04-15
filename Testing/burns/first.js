import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default function First(){
    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.boldText}>FIRST DEGREE BURN</Text>
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
                <Text style={styles.textBody}>Immediately immerse the burn in cool tap water or apply cold, wet compresses. 
                      Do this for about 10 minutes or until the pain subsides.{"\n"}</Text>
                <Text style={styles.smallBold}>2. Apply petroluem jelly two to three times daily{"\n"}</Text>
                <Text style={styles.textBody}>Do not apply ointments, toothpaste or butter to the burn, as these may cause an infection. Do not apply topical antibiotics.{"\n"}</Text>
                <Text style={styles.smallBold}>3. Cover the burn with a nonstick, sterile bandage{"\n"}</Text>
                <Text style={styles.textBody}>If blisters form, let them heal on their own while keeping the area covered. Do not pop the blisters.{"\n"}</Text>
                <Text style={styles.textBody}>Cover your burn with a clean bandage or wound dressing like non-stick gauze.{"\n"}</Text>
                <Text style={styles.smallBold}>4. Consider taking pain medication{"\n"}</Text>
                <Text style={styles.textBody}>Acetaminophen or ibuprofen can help relieve the pain and reduce inflammation.{"\n"}</Text>
                <Text style={styles.smallBold}>5. Protect the area from the sun{"\n"}</Text>
                <Text style={styles.textBody}>Once the burn heals, protect the area from the sun by seeking shade, wearing protective clothing or applying a broad-spectrum, water-resistant sunscreen.{"\n"}</Text>
            </View>

            <View style={styles.bodyHeader}>
                <Text style={styles.boldText}>When To See Doctor?</Text>
            </View>

            <View>
                <Text style={styles.smallBold}>First-degree burns usually heal on their own without treatment from a doctor.</Text>
                <Text style={styles.smallBold}>However, if your first-degree burn is very large/ if the victim is an infant or elderly person / if you think your burn is more severe, go to an emergency room immediately.{"\n"}</Text>
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
      backgroundColor: 'green',
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