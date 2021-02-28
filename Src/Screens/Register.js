import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const Register = () => {

    return (
        <ImageBackground
            source={require("../Assets/back.png")}
            style={{ width: '100%', height: "100%" }}>

            <Text
                style={{
                    fontSize: 30,
                    alignSelf: "center",
                    marginVertical: 40,
                    fontWeight: "bold",
                }}
            >Register</Text>

            <Text
                style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.7
                }}
            >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

            <View>
                <Picker style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 30,
                    borderColor: "black",
                    borderWidth: 2,
                    paddingHorizontal: 10,
                    opacity: 2,
                    borderRadius: 23,
                }}>
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Company" value="Company" />
                </Picker>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 20,
                paddingHorizontal: 10,
                borderColor: "black",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="black"
                    style={{ paddingHorizontal: 10 }}
                />



            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "black",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="black"
                    style={{ paddingHorizontal: 10 }}
                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "black",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="black"
                    style={{ paddingHorizontal: 10 }}
                />


            </View>

            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "white",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text style={{
                    color: "black",

                    fontWeight: "bold",
                }}>Register</Text>
            </View>

        </ImageBackground>
    )
}

export default Register

const styles = StyleSheet.create({})
