import React from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const CustomHomeHeader = ({ menuBarPress }: { menuBarPress: () => void }) => {
    return (
        <View style={styles.boxstyle}>
            <TouchableOpacity onPress={menuBarPress}>
             <MaterialIcons name={'menu'}  size={25} color={'gray'} style={{ alignSelf: 'center' }} />
             </TouchableOpacity>
        <View style={styles.container}>
           
            <TextInput
                onChangeText={() => { }}
                style={styles.inputStyles}
                placeholder="Find Members via ID"
            />
            <View style={styles.iconeStyle}>
                <Icon name={'search'} type={'octicon'} size={25} color={'gray'} style={{ alignSelf: 'center' }} />
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    boxstyle:{
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    inputStyles: {
        width: '90%',
        color: '#000',
        fontSize: 17,
        padding: 5,
    },
    iconeStyle:{
        justifyContent: 'center'
    }
})