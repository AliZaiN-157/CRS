import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../Components/Card';

const StudentPortal = () => {
    return (
        <ImageBackground
            source={require("../Assets/back.png")}
            style={{ width: "100%", height: "100%" }}
        >
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 40,
                    alignItems: "center",
                    paddingHorizontal: 40,
                }}
            >
                <Feather name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
                <MaterialIcons
                    name="account-circle"
                    size={33}
                    color="#a2a2db"
                    style={{ marginLeft: 250 }}
                />
            </View>

            <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                <Text
                    style={{
                        fontSize: 40,
                        paddingHorizontal: 10,
                        color: "black",
                    }}
                >
                    Welcome
                </Text>

                <Text
                    style={{
                        fontSize: 25,
                        paddingVertical: 10,
                        paddingRight: 80,
                        paddingHorizontal: 15,
                        lineHeight: 22,
                        color: "black",
                    }}
                >
                    Student Name
          </Text>

                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF",
                        borderRadius: 40,
                        alignItems: "center",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginTop: 30,
                    }}
                >
                    <MaterialIcons name="search" size={30} color="#a2a2db" style={{ width: 20 }} />
                    <TextInput
                        placeholder="Search Domain"
                        style={{ paddingHorizontal: 20, fontSize: 15, color: "#ccccef" }}
                    />
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginRight: -40, marginTop: 30 }}
                >
                </ScrollView>

                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "RobotoRegular",
                        marginTop: 50,
                        fontSize: 17,
                    }
                    }
                >
                    Popular
          </Text >

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: -40, marginTop: 30 }}
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </ScrollView>
            </View >
        </ImageBackground >
    )
}

export default StudentPortal

const styles = StyleSheet.create({})
