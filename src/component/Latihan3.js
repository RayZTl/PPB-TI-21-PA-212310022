import { View, Text, Image } from 'react-native'
import React from 'react'

const Latihan3 = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'purple' , width: 400, height: 400}}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                { <Image source={require('../assets/logo ibik.png')} style={{ width: 200, height: 200 }}
                /> }
            </View>
            <Text style={{ color: 'white', marginBottom: 70 }}>Loading...</Text>
        </View >

    )
}
export default Latihan3;
    
   