import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';




const Vacancy = ({ navigation }) => {

    const [vacancyForm, setVacancyForm] = useState({
        companyName: '',
        seats: '',
        position: '',
    })


    const submitHandler = () => {

        firestore()
            .collection("CrsData")
            .doc('rwvntvFotSm7A1MORdzu')
            .collection("CompanyData")
            .add(vacancyForm);
    }




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#524CB6' barStyle="light-content" />
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={{
                    fontSize: 34,
                    paddingVertical: 30,
                    textAlign: 'center',
                    color: '#524CB6'
                }}>Vacancy</Text>
                <ScrollView>
                    <Text style={styles.text_footer}>Company Name</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Company Name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setVacancyForm({ ...vacancyForm, companyName: val })}
                        />
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Position</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Position "
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setVacancyForm({ ...vacancyForm, position: val })}
                        />
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Seats</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Seats"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setVacancyForm({ ...vacancyForm, seats: val })}
                        />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                        >

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={submitHandler()}
                            style={[styles.signIn, {
                                borderColor: '#524CB6',
                                borderWidth: 2,
                                backgroundColor: '#524CB6',
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default Vacancy;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: '#fff'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});