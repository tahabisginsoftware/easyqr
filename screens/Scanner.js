import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(){
    const [permission, setPermission] = React.useState(null);
    const [scan, setScan] = React.useState(false);
    
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);

    const handleBCS = ({ type, data }) => {
        setScan(true);
        alert(`Barcode with type ${type} 
        and data ${Linking.openURL(`${data}`)} has been scanned`);
    };

    if(permission === null) {
        return <Text>Need Camera Permission</Text>
    }
    if(permission === false){
        return <Text>No Access to Camera</Text>
    }

    return(
        <View style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned={scan ? undefined : handleBCS}
                style = {StyleSheet.absoluteFillObject}
            />
            {scan && 
            <TouchableOpacity onPress={() => setScan(false)}
            style={styles.tap}>
            <Text style={{color:'white'}}>Tap to Scan again.</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#d8dbe2',
    },
    tap: {
        position:'absolute', 
        bottom: 15,
        borderRadius: 12,
        width: 150,
        height: 50,
        backgroundColor:'#131b23',
        justifyContent:'center',
        alignItems:'center'
    }
})