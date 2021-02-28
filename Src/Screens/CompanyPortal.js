import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Applications from '../Components/Applications';
import Card from '../Components/Card';


const CompanyPortal = () => {
    return (
        <ImageBackground
            source={require("../Assets/back2.png")}
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
                <Feather name="menu" size={30} color="#a2a2db" style={{ width: 25 }} />
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
                        fontSize: 35,
                        color: "black",
                    }}
                >
                    Amazon Web Services Pakistan
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
                        placeholder="Search Applicants"
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
                        color: "black",
                        marginTop: 50,
                        fontSize: 17,
                    }
                    }
                >
                    Applications
          </Text >

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: -40, marginTop: 30 }}
                >
                    <Applications />
                    <Applications />
                    <Applications />
                    <Applications />
                    <Applications />



                </ScrollView>
            </View >
        </ImageBackground>
    )
}

export default CompanyPortal

const styles = StyleSheet.create({})
