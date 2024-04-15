import React, {useState,useEffect,useRef} from "react";
import { StyleSheet,Text, View, Button, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CameraScreen = ({ navigation }) =>{
    const [hasPermission, setHasPermission]=useState(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [captureImage, setCaptureImage] = useState(null);
    const [startCamera, setStartCamera] = useState(true);
    const [photoURI, setPhotoURI] = useState(null);
    const cameraRef = useRef(null);
    const type = Camera.Constants.Type.back;

    
    useEffect(()=>{
        (async () =>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);

    if (hasPermission === null){
        return <View/>
    }
    if (hasPermission === false){
        return <Text>No access to camera</Text>;
    }

    
    const takePicture = async () =>{
        if (cameraRef.current){
            let photo = await cameraRef.current.takePictureAsync({});
            console.log(photo)
            setPreviewVisible(true)
            setCaptureImage(photo)
            setStartCamera(false)
            setPhotoURI(photo.uri)
        }
    }

    const savePhotoToPC = async () => {
        const formData = new FormData();
        formData.append('photo', {
          uri: photoURI,
          type: 'image/jpeg', // or the correct MIME type of your image
          name: 'captured-photo.jpg',
        });
      
        //ngrok tunnel --label edge=edghts_2eEB8UkPxjXuedW6AWDgr6BUNDH http://localhost:3000
        try {
          const response = await fetch('https://bright-wondrous-shark.ngrok-free.app/', {
            method: 'POST',
            body: formData,
          });
      
          const result = await response.text();
          console.log('Upload result:', result);
        } catch (error) {
          console.error('Error uploading photo:', error);
        }
      };

    const combinedAction = () =>{
        savePhotoToPC();
        navigation.navigate('Results')
    }

    const CameraPreview = ({photo}) => {
        console.log('sdsfds', photo)
        return (
        <View style={styles.background}>
          <View style={styles.cameraPreview}>
            <ImageBackground source={{uri: photo && photo.uri}}
              style={styles.background}/>
          </View>

        <View style={styles.buttonAllign}>
            <TouchableOpacity style={styles.buttonDesign} onPress={combinedAction}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDesign} onPress={retakePic}>
                <Text style={styles.buttonText}>RETAKE</Text>
            </TouchableOpacity>
        </View>
        </View>
        )
    }

    const retakePic = () => {
        setCaptureImage(null)
        setPreviewVisible(false)
    }

    return (
        <View style={{flex:1}}>
        {previewVisible && captureImage ? 
        (<CameraPreview photo={captureImage}/>) : (
            <Camera style={{flex:1}} type={type} ref={cameraRef}>
                <View style={styles.camera}>
                 <View style={styles.iconBackground}>
                    <TouchableOpacity onPress={takePicture} style={styles.cameraIcon}/>
                 </View>
                </View>
            </Camera>)}
        </View>
    );
};

export default CameraScreen;

//<Button style={styles.cameraText} title='Take Picture' onPress={takePicture}/>
const styles = StyleSheet.create({
    camera :{
        flex: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        padding:20,
        justifyContent: 'space-between',
    },

    iconBackground:{
        alignSelf:'center',
        flex:1,
        alignItems:'center',
    },

    cameraIcon:{
        width:70,
        height:70,
        bottom:0,
        borderRadius:50,
        backgroundColor:'white',
    },

    cameraPreview:{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    },

    background:{
        flex:1
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