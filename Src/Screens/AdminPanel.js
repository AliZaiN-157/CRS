import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const AdminPanel = () => {
    return (
        <ImageBackground
            source={require("../Assets/back2.png")}
            style={{ width: "100%", height: "100%" }}
        >
            <View style={{ justifyContent: 'center', paddingTop: 80 }}>
                <Text style={{
                    fontSize: 40,
                    color: "black",
                    textAlign: "center",
                    letterSpacing: 5,
                }}>
                    Welcome To
                </Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                }}>
                    Admin Panel
                </Text>
            </View>
        </ImageBackground>
    )
}

export default AdminPanel

const styles = StyleSheet.create({})
