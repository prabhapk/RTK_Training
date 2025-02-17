import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Button, StatusBar, Alert, Modal } from 'react-native'
import { CustomHomeHeader } from '../Screens/CustomHomeHeader'
import {  Divider, Icon } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Home = ({ navigation }:any) => {

    const MenuBarButton=()=>{
        setopenDrawer(!openDrawer)
    }

    const PaymentPage=()=>{
        navigation.navigate("PaymentPage")
        }

    const TAB_MENU = [
        {
            id: 1,
            title: 'saran',
        }
    ]

    const [onSelectedTab, setOnSelectedTab] = useState(1);
    const [openDrawer, setopenDrawer] = useState(false);



    const GROUP_ARRAY = [
        { id: 1, title: 'Group Admin Name', desc: 'Jane Deo' },
        { id: 1, title: 'eREC Group ID', desc: '9999' },
        { id: 1, title: 'Account Status', desc: 'In-Active' },
        { id: 1, title: 'Last Sign In', desc: 'Jul 30, 2024' },
        { id: 1, title: 'Account Type', desc: 'School - Public' },
        { id: 1, title: 'Expiry Date', desc: '-' },
    ]
    return (
        <View style={styles.container}>
            <StatusBar 
            
            />
           
                <CustomHomeHeader 
                menuBarPress={()=>MenuBarButton()}
                />
                
           {openDrawer&& <TouchableOpacity style={{height:"100%", width:"120%",backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', zIndex:5, top:40}}
            onPressOut={()=>MenuBarButton()}
            >
                <View style={{height:"100%", width:"60%", position:'absolute', zIndex:5, backgroundColor:'white'}}>
                <TouchableOpacity style={{marginTop:20, marginLeft:20, height:"5%", width:"90%", justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'bold',textDecorationLine: 'underline', fontSize:18}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20, marginLeft:20, height:"5%", width:"90%", justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'bold',textDecorationLine: 'underline', fontSize:18}}>How eREC works</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20, marginLeft:20, height:"5%", width:"90%", justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'bold',textDecorationLine: 'underline', fontSize:18}}>Benefits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20, marginLeft:20, height:"5%", width:"90%", justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'bold',textDecorationLine: 'underline', fontSize:18}}>Security & Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20, marginLeft:20, height:"5%", width:"90%", justifyContent:'center'}}>
                    <Text style={{color:'black', fontWeight:'bold',textDecorationLine: 'underline', fontSize:18}}>How Much</Text>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>}
           
            <View style={{ marginTop: 20 }}>
                <Text style={styles.brSchlTxtStyle}>Brox Hight School of Science</Text>
                <Text style={styles.distTxtStyle}>Distrct: <Text style={styles.distNameTxtStyle}>New York</Text></Text>
            </View>
            <View style={{ marginTop: 20 }}>
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
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={styles.groupCardContStyle}>
                    <View style={styles.groupContainerSty}>
                        <AntDesign name={'circledowno'} size={20} color={'red'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.gropTxtStyle}>Group Basic details</Text>
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
                    <Divider style={{ backgroundColor: '#fff', marginVertical: 10 }} />
                    <View style={{ }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                <Text style={styles.inviteTxtSty}>Invie New eREC Members</Text>
                                <Text style={styles.inviteDescTxtSty}>Invite Parents/Gaurdians/Employees to join your eREC account</Text>
                            </View>
                            <View style={{ flex: 0.3 , justifyContent: 'center'}}>
                                <TouchableOpacity 
                                style={styles.inviteBthSty}
                                onPress={PaymentPage}
                                >
                                <Text style={{textAlign:'center', color:'red', padding:10}}>INVITE NOW</Text>
                                  
                                    
                                  </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={styles.groupCardContStylenew}>
                    <View style={styles.groupContainerSty}>
                        <AntDesign name={'user'}  size={20} color={'black'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.gropTxtStyle}>Group Plan / Promotion Information</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#fff', marginVertical: 10 }} />
                    <View style={{justifyContent:'space-between', flexDirection:'row', width:"100%", height:"40%"}}>
                    <View style={{alignSelf:'center'}}>
                        <MaterialIcons name={'error'}  size={20} color={'black'} style={{ alignSelf: 'center' }} />
                    </View>
                    <View style={{flexDirection:'column',alignSelf:'center',flexWrap: 'wrap', width:"60%"}}>
                        <Text style={{fontSize:12}}>
                            Pay your Balance Due of $4500.00
                        </Text>
                        <Text style={{fontSize:10}} >
                            {"Please Pay it before the plan expires,\n to continue the eREC services"}
                        </Text>
                    </View>
                    
                    <View 
                    style={{  justifyContent: 'center'}}
                    >
                                <TouchableOpacity style={styles.inviteBthStynew}>
                                <Text style={{textAlign:'center', color:'white', padding:10}}>PAY $4500.00</Text>
                                  
                                    
                                  </TouchableOpacity>
                            </View>
                            </View>

                            <View style={{marginTop:10}}>
                                <Text style={{fontSize:12}}>
                                    Need help on payments? Contact Support team: 888-545-77777
                                </Text>
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
        fontSize: 20,

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
        borderRadius:5
        // fontSize: 10,
    },
    inviteBthStynew:{
        backgroundColor:'red',
        
        justifyContent:'center',
        borderRadius:5
        // fontSize: 10,
    }
})

export default Home