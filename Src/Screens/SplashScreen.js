import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import Login from './Login'

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login")
        }, 2200)
    })
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../Assets/crs.json')}
                autoPlay loop
                style={styles.splashAnimation}
            />
            <View>
                <Text style={{
                    fontSize: 48,
                    fontWeight: 'bold',
                    letterSpacing: 5,
                    fontFamily: 'Helvetica',
                    textAlign: 'center'
                }}>
                    Campus Recruitment System
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    splashAnimation: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
})
