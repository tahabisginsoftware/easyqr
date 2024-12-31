import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Scanner')}
            style={styles.scanB}>
                <Text style={{color:'white', fontSize:20, 
                fontWeight:'bold'}}>Scan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8dbe2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanB: {
        backgroundColor: '#344966',
        justifyContent:'center',
        alignItems: 'center',
        width:150,
        height:50,
        borderRadius:12
    },
})