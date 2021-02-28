import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import AdminPanel from './AdminPanel'
import StudentPortal from './StudentPortal'
import CompanyPortal from './CompanyPortal'
import { GoogleSignin } from '@react-native-community/google-signin';
import AuthNavigator from '../Configs/Navigation';
import AdminTabNavigator from '../Configs/AdminTabNavigator';
import StudentTabNavigator from '../Configs/StudentTabNavigator';
import CompanyTabNavigator from '../Configs/CompanyTabNavigator';

GoogleSignin.configure({
    webClientId: '162637635710-p6a5ohpqk69onafiq9g35iaolvbbljhq.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    console.log(auth().signInWithCredential(googleCredential));

    return navigation.navigate('CompanyPortal')
}

const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    return (

        <ImageBackground
            source={require("../Assets/back.png")}
            style={{ width: '100%', height: "100%", }}>


            <Text
                style={{
                    fontSize: 30,
                    alignSelf: "center",
                    marginVertical: 40,
                    fontWeight: "bold",
                }}
            >Log In Here</Text>

            <Text
                style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.7,
                }}
            >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>
            <View>
                <Picker
                    selectedValue={user}
                    onValueChange={(user) => setUser(user)}
                    style={{
                        marginHorizontal: 55,
                        fontWeight: "bold",
                        textAlign: 'center',
                        marginTop: 30,
                        borderColor: "#00716F",
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
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "black",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <MaterialIcons
                    name="mail"
                    color="black"
                    size={24}
                />
                <TextInput
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
                <Feather
                    name="key"
                    color="black"
                    size={24}
                />
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                />
            </View>
            <Text style={{
                alignSelf: "center",
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "SemiBold",
                paddingVertical: 10
            }}> OR </Text>
            <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            >
                <Text
                    style={{
                        alignSelf: "center",
                        color: "black",
                        fontWeight: "bold",
                        paddingVertical: 15,

                    }}>
                    Google Sign In</Text>
            </TouchableOpacity>

            <View style={{
                marginHorizontal: 45,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                backgroundColor: "white",
                paddingVertical: 10,
                borderRadius: 23
            }}>

                <TouchableOpacity>
                    <Text style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>Already a member
                </Text>
                </TouchableOpacity>
            </View>
            <Text

                onPress={() => navigation.navigate('Register')}

                style={{
                    alignSelf: "center",
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: 30,
                    borderColor: "black",

                }}>New User</Text>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({})
