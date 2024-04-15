import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/home';
import CameraScreen from '../components/camera';
import Results from '../components/result';

const Stack = createStackNavigator();

function MyStack(){
    return(
     <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

export default function burnstack(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}