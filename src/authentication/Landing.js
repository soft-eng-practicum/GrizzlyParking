
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
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
            return () => {
                //RootStore.ParkingDomain.removeListenerForLastCheckin();
            };
        }, []);

        RootStore.ParkingDomain.setListenerForLastCheckin();

        parkingAlert = (lot) => {
            Alert.alert("Are you Parking Here?", "Are you parking in " + lot + "?",
                [
                    {
                        text: "Yes",
                        // onPress: () => RootStore.ParkingDomain.markAsParked(lot)
                    },
                    {
                        text: "No",
                        onPress: () => { }
                    }
                ],
                {
                    cancelable: true
                });
        }

        determineBackgroundColor = (lot) => {
            let parkingLot = RootStore.ParkingDomain.parkingLots.find(x => x.Name == lot);

            if (!parkingLot) {
                return '#eaeaea'
            }
            else if (parkingLot.CheckinPercent > 60) {
                return '#d10d0d';
            } else if (parkingLot.CheckinPercent > 30) {
                return '#d9d511';
            } else if (parkingLot.CheckinPercent) {
                return '#0ec91b';
            } else {
                return '#eaeaea'
            }
        }

        return (

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.scrollView}>
                        <View style={styles.titleContainer}>

                            <View style={styles.button}>

                                <TouchableOpacity style={styles.buttonText}
                                    onPress={() => navigation.goBack()}>
                                    <Text style={styles.buttonText}>Log Out</Text>
                                </TouchableOpacity>

                            </View>

                            <View>
                                <Text style={styles.logoText}> Parking Lots </Text>
                            </View>

                            <View style={styles.button}>

                                <TouchableOpacity style={styles.buttonText}
<<<<<<< HEAD
                                    onPress={() => navigation.goBack()}>
                                    <Text style={styles.buttonText}>Profile</Text>
                                </TouchableOpacity>

                            </View>

                        </View>



                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot H')
                                }])} />
                            <Text style={styles.lotsText}>Lot H</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot H')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot H")}>
                            <Image source={B} style={styles.backgroundImage} />
                        </TouchableOpacity>

                        {/* Default --> {assumed equation}

                    availibility = default%;
                        if user (parked) {
                            prompt("assume % of availability");
                                    //onces they answer: +20 stars
                                            --> with 1000 stars they get free starbucks.
                            availiability -= 20%; 
                        } 
                        
                        else {
                            after (hour) --> 
                        }
****************************************************************************************************

assumption: 50%;

if(parked):
    assumption += 10%; 
else if(!parked && hour = 1):
        assumption -= 10%;
        if(asssumption = 0%):
            assumption = assumption;
else: 
    assumption = assumption;

****************************************************************************************************


                        */}


                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot A')
                                }])} />
                            <Text style={styles.lotsText}>Lot A</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot A')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot A")}>
                            <Image source={C} style={styles.backgroundImage} />
                        </TouchableOpacity>



                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Parking Deck')
                                }])} />
                            <Text style={styles.lotsText}>Parking Deck</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Parking Deck')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Parking Deck")}>
                            <Image source={F} style={styles.backgroundImage} />
                        </TouchableOpacity>



                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot F')
                                }])} />
                            <Text style={styles.lotsText}>Lot F</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot F')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot F")}>
                            <Image source={E} style={styles.backgroundImage} />
                        </TouchableOpacity>





                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot I')
                                }])} />
                            <Text style={styles.lotsText}>Lot I</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot I')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot I")}>
                            <Image source={D} style={styles.backgroundImage} />
                        </TouchableOpacity>



                        <View style={styles.lotHeader}>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot L')
                                }])} />
                            <Text style={styles.lotsText}>Lot L</Text>
                            <View style={StyleSheet.flatten([
                                styles.percentDot,
                                {
                                    backgroundColor: this.determineBackgroundColor('Lot L')
                                }])} />
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot L")}>
                            <Image source={A} style={styles.backgroundImage} />
                        </TouchableOpacity>

                        <View style={styles.button}>

                            <Button title="Log Out" color="#0A5A45"

                                onPress={() => { RootStore.UserDomain.user = null; navigation.goBack(); }} />
                        </View>
=======
                                    onPress={() => navigation.navigate("ProfilePage")}>
                                    <Text style={styles.buttonText}>Profile</Text>
                                </TouchableOpacity>

                            </View>

                        </View>


                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot H')
                            }])}/>
                        <Text style={styles.lotsText}>Lot H</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot H')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot H")}>
                        <Image source={B} style={styles.backgroundImage} />
                    </TouchableOpacity>

                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot A')
                            }])}/>
                        <Text style={styles.lotsText}>Lot A</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot A')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot A")}>
                        <Image source={C} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Parking Deck')
                            }])}/>
                        <Text style={styles.lotsText}>Parking Deck</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Parking Deck')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Parking Deck")}>
                        <Image source={F} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot F')
                            }])}/>
                        <Text style={styles.lotsText}>Lot F</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot F')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot F")}>
                        <Image source={E} style={styles.backgroundImage} />
                    </TouchableOpacity>



                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot I')
                            }])}/>
                        <Text style={styles.lotsText}>Lot I</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot I')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot I")}>
                        <Image source={D} style={styles.backgroundImage} />
                    </TouchableOpacity>


                
                    <View style={styles.lotHeader}>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot L')
                            }])}/>
                        <Text style={styles.lotsText}>Lot L</Text>
                        <View style={StyleSheet.flatten([
                            styles.percentDot,
                            {
                                backgroundColor: this.determineBackgroundColor('Lot L')
                            }])}/>
                    </View>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => parkingAlert("Lot L")}>
                        <Image source={A} style={styles.backgroundImage} />
                    </TouchableOpacity>
>>>>>>> bf62e5e4c6fd2523878e8005adfeb8ede5bb383f

                    </View>
                </ScrollView>
            </View>

        );
    })

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 12,
        paddingLeft: 12
    },
<<<<<<< HEAD

=======
>>>>>>> bf62e5e4c6fd2523878e8005adfeb8ede5bb383f
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
<<<<<<< HEAD
    // button: {
    //     alignSelf: 'center',
    //     height: 100,
    //     width: 150,
    //     marginTop: 25,

    // },

=======
    /*button: {
        alignSelf:'center',
        height: 100,
        width: 150,
        marginTop: 25,
    },*/
>>>>>>> bf62e5e4c6fd2523878e8005adfeb8ede5bb383f
    button: {
        backgroundColor: '#0A5A45',
        borderRadius:15,
        height: 40,
        width: 70,
        marginTop: 15,
},
<<<<<<< HEAD
buttonText: {
    color: 'rgba(255,255,255,0.9)',
    textAlign:'center',
    fontSize: 15,
    marginTop:4,
=======
    buttonText: {
        color: 'rgba(255,255,255,0.9)',
        textAlign:'center',
        fontSize: 15,
        marginTop:4,
>>>>>>> bf62e5e4c6fd2523878e8005adfeb8ede5bb383f
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
        shadowOffset: {
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
    lotHeader: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: '#0A5A45',
        width: WIDTH - 18,
        height: 30,
        marginBottom: 10,
        marginTop: 10,
    },
    percentDot: {
        height: 15,
        width: 15,
        borderRadius: 15,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 38,
        opacity: 0.8,
        marginTop: 10,
        paddingBottom: 5,
    },

    lotsText: {
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
    },
});