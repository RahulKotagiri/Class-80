import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {DrawerItems} from 'react-navigation-drawer';
import db from '../config'
import firebase from 'firebase'

export default class CustomSideBarMenu extends Component {
    render(){
        return(
            <View style = {styles.container}>
                    <View style = {styles.drawerItemsContainer}>
                        <DrawerItems {...this.props}/>

                                          
                    </View>

                    <View style = {styles.logOutContainer}>
                        <TouchableOpacity styles = {styles.button} 
                        onPress = {()=>{
                            firebase.auth().signOut()
                            this.props.navigation.navigate("Welcome Screen")
                        }}>
                            <Text style = {styles.buttonText}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>

                    
            </View>
            
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })