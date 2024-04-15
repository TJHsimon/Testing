import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>Burns</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'orange',
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});