import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import First from '../burns/first';
import Second from '../burns/second';
import Third from '../burns/third';
import NonBurn from '../burns/non-burn';
import burnResult from './testing.json'
import { imgDB } from '../Firebase/firebase';
import { txtDB } from '../Firebase/firebase';

//useEffect(() => {

   // const fetchData = async () => {
   //     await fetch('https://11a9-175-136-164-74.ngrok-free.app/AI_code');
   // };

   // fetchData();

  //  const refresh = setInterval(() => {
  //    fetchData()
  //  }, 300000);


//},[]);

//const degree_number = degree;

   // <View style={styles.container}>
   // <Text>{degree_number}</Text>
   // </View>

export default function Results(){

    const imageDetected = '../assets/pictureTaken/captured-photo.jpg'

    const [photoID,setPhotoID] = useState('null');
    
    var burnRender = burnResult.result

    const uploadImageToStorage = async () => {
        //askForNetworkPermission();
        try{
        //create a name
        const now = new Date();
        const imageName = now.toLocaleDateString + "/" + now.toLocaleTimeString();

        //convert to blob
        const response = await fetch(imageDetected);
        const blob = await response.blob();
        setPhotoID(blob);

        //upload the picture
        const ref = imgDB.ref().child('images/' + imageName)
        await ref.put(blob);

        console.log('Image uploaded successfully!');

        }catch (error){
        console.error('Error uploading image: ', error);
        }
    }

    //Attention
    const saveDataTofirestore = () => {
        txtDB.collection('data').add({
            text: burnRender,
            image: photoID
        }).then(() => {
            console.log('Data saved successfully');
            setPhotoID('null')
            setTextData('');
        }).catch((error)=>{
            console.error('Error saving data', error);
        })
    };

    return (
     <View style={styles.container}>
       <View style={styles.container}>
       {burnRender == 0 && <First/>}
       {burnRender == 1 && <Second/>}
       {burnRender == 2 && <Third/>}
       {burnRender == 3 && <NonBurn/>}
       </View>

       <View style={styles.buttonAllign}>
            <TouchableOpacity style={styles.buttonDesign} onPress={uploadImageToStorage}>
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDesign} >
                <Text style={styles.buttonText}>SHARE</Text>
            </TouchableOpacity>
        </View>
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    buttonAllign:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    buttonDesign:{
        backgroundColor: '#00ced1',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },

    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    }
})