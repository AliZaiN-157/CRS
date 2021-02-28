import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const Card = () => {
    return (
        <View
            style={{
                backgroundColor: "#FEFEFE",
                height: 230,
                width: 220,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 7,

            }}
        >

            <View
                style={{
                    flexDirection: "row",
                    width: 200,
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
                        Company Name
                  </Text>
                </View>
                <Feather name="star" size={20} color="#ff5c83" />
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                <Text style={{ paddingVertical: 7, fontSize: 15, fontWeight: 'bold' }}> Mern Stack Developer</Text>
                <Text style={{ paddingVertical: 5 }}>Vacany: 100</Text>
                <Text style={{ paddingVertical: 5, paddingBottom: 30 }}>Seats Left: 100</Text>
                <Button color={"#524CB6"} title="Apply"
                />
            </View>
        </View>

    )
}

export default Card

const styles = StyleSheet.create({})
