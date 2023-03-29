import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

interface DeviceInfo {
    uniqueId: string;
    deviceId: string;
    deviceName: string;
    brand: string;
    model: string;
    systemVersion: string;
    appVersion: string;
    bttryLevel: number;
    FreeDiskStorage: number;
    TotalDiskStorage: number;
    UsedStorage: number;
}

export default function DeviceInfoScreen() {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        uniqueId: '',
        deviceId: '',
        deviceName: '',
        brand: '',
        model: '',
        systemVersion: '',
        appVersion: '',
        bttryLevel: 0,
        FreeDiskStorage: 0,
        TotalDiskStorage: 0,
        UsedStorage: 0
    });

    useEffect(() => {
        // Retrieve device information on mount
        const getDeviceInfo = async () => {
            const uniqueId = await DeviceInfo.getUniqueId();
            const deviceId = DeviceInfo.getDeviceId();
            const deviceName = await DeviceInfo.getDeviceName();
            const brand = DeviceInfo.getBrand();
            const model = DeviceInfo.getModel();
            const systemVersion = DeviceInfo.getSystemVersion();
            const appVersion = DeviceInfo.getVersion();
            const bttryLevel = await DeviceInfo.getBatteryLevel();
            const FreeDiskStorage = await DeviceInfo.getFreeDiskStorage();
            const TotalDiskStorage = await DeviceInfo.getTotalDiskCapacity();
            const UsedStorage = await DeviceInfo.getUsedMemory();

            setDeviceInfo({
                uniqueId,
                deviceId,
                deviceName,
                brand,
                model,
                systemVersion,
                appVersion,
                bttryLevel,
                FreeDiskStorage,
                TotalDiskStorage,
                UsedStorage
            });
        };

        getDeviceInfo();
    }, []);

    return (
        <View style={{ backgroundColor: '#720D5D' }}>
            <ScrollView>
                <View style={{ alignItems: 'center', margin: 20, }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white' }}>Welcome </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Your device details</Text>
                </View>

                <View style={{ marginTop: 1, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Device ID:</Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.deviceId}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Device Name: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.deviceName}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Brand: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.brand}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Model: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.model}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> System Version: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.systemVersion}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> App Version: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{deviceInfo.appVersion}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Battey Level: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{(deviceInfo.bttryLevel * 100).toFixed(0)}%</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Free Storage: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{(deviceInfo.FreeDiskStorage / 1024 / 1024 / 1024).toFixed(1)} gb</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> TotalDiskStorage: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{(deviceInfo.TotalDiskStorage / 1024 / 1024 / 1024).toFixed(1)} gb</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> Used Storage: </Text>
                    <View style={styles.ListContainer}>
                        <Text>{(deviceInfo.UsedStorage / 1024 / 1024 / 1024).toFixed(1)} gb</Text>
                    </View>

                </View>

                <View style={{ marginBottom: 20 }} />

            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    ListContainer: {
        flexDirection: 'row',
        height: 50,
        width: 300,
        marginHorizontal: 30,
        marginVertical: 6,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
    },
})

