
import { observer } from 'mobx-react';
import React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import A from '../../lib/images/L_Lot.jpg'
import B from '../../lib/images/H_Lot.jpg'
import C from '../../lib/images/A_Lot2.jpg'

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export const Profile = observer(
    ({ navigation, ...props }) => {
        return (

            <View style={styles.background}>
                <Text style={styles.logoText}> Parking Lots </Text>

                <View>
                    <Text style={styles.lotsText}>Lot A</Text>
                </View>
                <View>
                    <Image source={C} style={styles.backgroundImage} />
                </View>


                <View>
                    <Text style={styles.lotsText}>Lot H</Text>
                </View>
                <View>
                    <Image source={B} style={styles.backgroundImage} />
                </View>

                
                <View>
                    <Text style={styles.lotsText}>Lot L</Text>
                </View>

                <View>
                    <Image source={A} style={styles.backgroundImage} />
                </View>

                <View style={styles.button}>
                    <Button title="Go Back" color="#0A5A45"
                        onPress={() => navigation.goBack()} />
                </View>
            </View>
        );
    })

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#056f4b',
        height: HEIGHT,
        width: WIDTH,
    },

    backgroundImage: {
        resizeMode: "contain",
        alignSelf: 'center',
        width: 373,
        height: 177,
    },

    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        opacity: 0.8,
        marginTop: 10,
        paddingBottom: 5,
    },

    lotsText: {
        color: 'rgba(255,255,255,0.9)',
        backgroundColor: '#0A5A45',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        width: WIDTH - 18,
        height: 30,
        marginBottom: 10,
        marginTop: 10,
    },
});