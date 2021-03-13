import React from 'react';
import { Image } from 'react-native';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    }, 

}, 
{
    contentComponent: CustomSideBarMenu
}, 
{
    initialRouteName: "Home"
});
