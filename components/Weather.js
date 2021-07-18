import React,{useState} from 'react'
import { View,ImageBackground, Text ,StyleSheet} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return( 
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.innerText}>Zip Code IS {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
        height: '100%'
    },
    innerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    container: { 
        justifyContent: 'center',
        width: '100%', 
        height: '50%', 
        opacity: 0.5, 
        backgroundColor: '#012',
        alignItems: 'center',
    },
})