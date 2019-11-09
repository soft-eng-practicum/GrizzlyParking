
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert} from 'react-native';
import A from '../../lib/images/L_Lot.jpg'
import B from '../../lib/images/H_Lot.jpg'
import C from '../../lib/images/A_Lot2.jpg'
import D from '../../lib/images/I_Lot.jpg'
import E from '../../lib/images/F_Lot.jpg'
import F from '../../lib/images/Parking_Deck.jpg'
import { RootStoreContext } from '../stores/RootStore';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export const Landing = observer(
    ({ navigation, ...props }) => {

        const RootStore = React.useContext(RootStoreContext);

        useEffect(() => {
            RootStore.ParkingDomain.setListenerForLastCheckin();

            return () => {
                RootStore.ParkingDomain.removeListenerForLastCheckin();
            };
        }, []);


        parkingAlert = (lot) => {
            Alert.alert("Are you Parking Here?", "Are you parking in " + lot + "?",
            [
                {
                    text: "Yes",
                    onPress: () => RootStore.ParkingDomain.markAsParked(lot)
                },
                {
                    text: "No",
                    onPress: () => {}
                }
            ],
            {
                cancelable: true
            });
        }

        return (

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.scrollView}>
                  <Text style={styles.logoText}> Parking Lots </Text>



                    <View>
                        <Text style={styles.lotsText}>Lot H</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot H")}>
                        <Image source={B} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View>
                        <Text style={styles.lotsText}>Lot A</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot A")}>
                        <Image source={C} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View>
                        <Text style={styles.lotsText}>Parking Deck</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Parking Deck")}>
                        <Image source={F} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View>
                        <Text style={styles.lotsText}>Lot F</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot F")}>
                        <Image source={E} style={styles.backgroundImage} />
                    </TouchableOpacity>

                    



                    <View>
                        <Text style={styles.lotsText}>Lot I</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot I")}>
                        <Image source={D} style={styles.backgroundImage} />
                    </TouchableOpacity>


                
                    <View>
                        <Text style={styles.lotsText}>Lot L</Text>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot L")}>
                        <Image source={A} style={styles.backgroundImage} />
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <Button title="Logout" color="#0A5A45"
                            onPress={() => navigation.goBack()} />
                    </View>

                    </View>
                    </ScrollView>
            </View>
           
        );
    })

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 12,
        paddingLeft: 12
    },
    button: {
        alignSelf:'center',
        height: 100,
        width: 150,
        marginTop: 25,
       
    },  

    background: {
        backgroundColor: '#056f4b',
        height: HEIGHT,
        width: WIDTH,
    },
    imageContainer: {
        height: 185,
        shadowColor: 'black',
        shadowOpacity: 0.50,
        shadowOffset:{
                      width: 10,
                      height: 10
                     }
    },
    backgroundImage: {
        resizeMode: "cover",
        alignSelf: 'stretch',
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 15,
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