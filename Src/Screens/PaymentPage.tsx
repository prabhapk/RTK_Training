import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Button, StatusBar, Alert } from 'react-native'
import { CustomHomeHeader } from '../Screens/CustomHomeHeader'
import {  Divider, Icon } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'




const Home = () => {

    const MenuBarButton=()=>{
        Alert.alert("whatsnew")
    }

    const TAB_MENU = [
        {
            id: 1,
            title: 'saran',
        }
    ]

    const [onSelectedTab, setOnSelectedTab] = useState(1);



    const GROUP_ARRAY = [
        { id: 1, title: 'Admin User Name', desc: 'Jane Deo' },
        { id: 1, title: 'Title', desc: 'HOD' },
        { id: 1, title: 'eREC role', desc: 'Dept. of science' },
        { id: 1, title: 'Username/Email', desc: 'name@mail.com' },
        { id: 1, title: 'Action', desc: 'View  Edit  Delete' },
        
    ]
    return (
        <View style={styles.container}>
            <StatusBar 
            
            />
           
                {/* <CustomHomeHeader 
                menuBarPress={MenuBarButton}
                /> */}
            
            {/* <View style={{ marginTop: 20 }}>
                <Text style={styles.brSchlTxtStyle}>Brox Hight School of Science</Text>
                <Text style={styles.distTxtStyle}>Distrct: <Text style={styles.distNameTxtStyle}>New York</Text></Text>
            </View> */}
            {/* <View style={{ marginTop: 20 }}>
                <View style={styles.menuContinerStyle}>
                    {TAB_MENU.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => { setOnSelectedTab(item.id) }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.menuTxtStyle, {
                                        color: onSelectedTab === item.id ? 'pink' : '#000'
                                    }]}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View> */}
            <View style={{flex:1, marginTop:50}}>
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={styles.groupCardContStyle}>
                    <View style={styles.groupContainerSty}>
                        <Icon name={'search'} type={'octicon'} size={20} color={'pink'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.gropTxtStyle}>Other Administrator Result</Text>
                        <Text>Filter admin status by:</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#fff', marginVertical: 10 }} />
                    <View style={styles.cardDeteilsSty}>
                        {GROUP_ARRAY.map((item, index) => {
                            return (
                                <View>
                                    <Text style={styles.groupTitleTxtSty}>{item.title}</Text>
                                    <Text style={styles.groupDescTxtSty}>{item.desc}</Text>
                                </View>
                            )
                        })}
                    </View>
                    
                </View>
            </View>
            <View style={{   }}>
                <View style={styles.groupCardContStylenew}>
                    <View style={styles.groupContainerSty}>
                        <Icon name={'search'} type={'octicon'} size={20} color={'pink'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.gropTxtStyle}>General School Information</Text>
                        <Text>Edit Details</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#fff', marginVertical: 10 }} />
                    {/* <View style={styles.cardDeteilsSty}>
                        {GROUP_ARRAY.map((item, index) => {
                            return (
                                <View>
                                    <Text style={styles.groupTitleTxtSty}>{item.title}</Text>
                                    <Text style={styles.groupDescTxtSty}>{item.desc}</Text>
                                </View>
                            )
                        })}
                    </View> */}
                    <View>
                        <Text style={{color:'black', fontWeight:'bold'}}>
                            Primary Address
                        </Text>
                        <Text style={{color:'black'}}>
                            No:54/6, perumal ovil street, America, New york stree, chennai-54
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                        <Text style={{color:'black', fontWeight:'bold'}}>
                            Primary Phone Number
                        </Text>
                        <Text style={{color:'black'}}>
                            9175-950-536
                        </Text>
                        </View>
                        <View style={{}}>
                        <Text style={{color:'black', fontWeight:'bold'}}>
                            Secondary Phone Number
                        </Text>
                        <Text style={{color:'black'}}>
                            9175-950-536
                        </Text>
                        </View>
                    </View>
                    
                </View>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    brSchlTxtStyle: {
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: 20,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center'
    },
    distTxtStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginTop: 10,
        textAlign: 'center'
    },
    distNameTxtStyle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000'
    },
    menuContinerStyle: {
        flexDirection: 'row'
    },
    menuTxtStyle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000'
    },
    gropTxtStyle: {
        fontWeight: '800',
        color: '#000',
        fontSize: 14,

    },
    groupCardContStyle: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        elevation:10
    },
    groupCardContStylenew: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation:10
    },
    groupContainerSty: {
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 10,
        justifyContent:'space-between'
    },
    groupTitleTxtSty: {
        fontSize: 14,
        color: '#000',
        fontWeight: '700'
    },
    groupDescTxtSty: {
        fontSize: 12,
        color: '#000'
    },
    cardDeteilsSty: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // textAlign:'center'
    },
    inviteTxtSty:{
        fontSize: 14,
        color: '#fff'
    },
    inviteDescTxtSty:{
        marginTop: 10,
        fontSize: 12,
        color: 'lightgray'
    },
    inviteBthSty:{
        backgroundColor:'white',
        
        justifyContent:'center',
        
        // fontSize: 10,
    },
    inviteBthStynew:{
        backgroundColor:'white',
        
        justifyContent:'center',
        
        // fontSize: 10,
    }
})

export default Home