import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Splash = () => {

    const [IsGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(() => {
        if (IsGo == true) {
            setTimeout(() => {
                Navigation.navigate('Homescreen');
                setIsGo(false);
            }, 2000);
        }
    });

    return (
        <View style={styles.backGround}>
            <ImageBackground source={require("../assests/images/11.jpg")}
                style={styles.image}
                resizeMode="stretch">


                <View style={styles.imgLocation}>
                    <Text style={styles.Welcome}>Welcome to Device Manager</Text>
                </View>

                <View style={{ marginBottom: '200%' }}></View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    backGround: {

    },

    Welcome: {
        textAlign: 'center',
        paddingTop: 200,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },

    imageContainer: {
        width: 130,
        height: 200,
    },

    imgLocation: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
});

export default Splash;
