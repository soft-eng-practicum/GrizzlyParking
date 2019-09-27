import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import React from 'react';
import { Button, Text, View } from 'react-native';

export const Profile = observer(
    ({ navigation, ...props }) => {
        return (
            <View style={styles.main}>
                <Text style={styles.text}>
                    Login Page
                </Text>
                <View style={styles.button}>
                    <Button
                        title="Go Back"
                        color="#0A5A45"
                        onPress={() => navigation.goBack()} />
                </View>
            </View>
        );
    })

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DADADA"
    },
    text: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    button: {
        height: 100,
        width: 150,
        marginTop: 16,
        padding: 8,
    }
});