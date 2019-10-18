import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <MapView style={styles.map}
                    region={{
                       latitude: 33.98033,
                       longitude: -84.0022316589,
                       latitudeDelta: 0.1,
                       longitudeDelta: 0.1,
                   }}
                >
                    <MapView.marker
                        coordinate={{
                            latitude: 33.98033,
                            longitude: -84.0022316589
                        }}
                        title={'GGC'}
                        description={'Actual location of GGC'}
                    />


                </MapView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})