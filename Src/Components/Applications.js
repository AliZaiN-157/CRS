import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const Applications = () => {
    return (
        <View
            style={{
                backgroundColor: "#FEFEFE",
                height: 250,
                width: 230,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 7,

            }}
        >

            <View
                style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        Name
                  </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                <Text style={{ paddingVertical: 7, fontSize: 15, fontWeight: 'bold' }}>Position: Mern Stack Developer</Text>
                <Text style={{ paddingVertical: 5 }}>Applicant-ID: 001</Text>

            </View>
        </View>

    )
}

export default Applications

