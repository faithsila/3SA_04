import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList,View,Text,StyleSheet, TouchableHighlight,ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated'


const availableZipItems = [
    { place: 'Nakhonsithammarat', code: '90110' },
    { place: 'Thungsong', code: '80110' },
    { place: 'Thungyai', code: '80240' },
    { place: 'Nabon', code: '80220' },
    { place: 'Tahsala', code: '80160' },
]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../nakhon.jpg')} style={styles.bg}>
            <FlatList 
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg:{
        width: '100%' ,
        height: '100%' ,
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#87CEEB',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
}) 