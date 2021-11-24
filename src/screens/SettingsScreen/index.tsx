/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../../themes/baseTheme';


interface Props extends NativeStackScreenProps <any, any>{}

const Component = (props: Props) => {
const {navigation} = props;
 const [isEnabled, setIsEnabled] = useState(false);
 const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 const [isEnabledmode, setIsEnabledmode] = useState(false);
 const toggleSwitchmode = () => setIsEnabledmode(previousState => !previousState);

 const logOut = ()=>{
   navigation.navigate('Login');
 };

 return (
   <View style={(styles.Container)}>
     <ImageBackground style={(styles.Image)} source={require('../../assets/images/settings.jpeg')}>
       <View style= {styles.SettingsView}>
       <View style={(styles.AccountContainer)}>
         <View style={(styles.Box)}>
           <Text style={(styles.TextTitle)}> ACCOUNT </Text>
         </View>
         <View style={(styles.Box)}>
           <Icon
            type="material-community"
            name="bell-outline"
            size={25}
            color="white"
           />
           <Text style={(styles.TextSubtitle)}> Push Notification  </Text>
           <View style={styles.SwitchContainer}>
             <Switch
               trackColor={{ true: '#00b0ff' }}
               thumbColor={isEnabled ? 'white' : 'white'}
               ios_backgroundColor= "#c4e4f3"
               onValueChange={toggleSwitch}
               value={isEnabled} />
           </View>
         </View>
         <View style={(styles.Box)}>
           <Icon
             type="material-community"
             name="pencil"
             size={25}
             color="white"
           />
           <TouchableOpacity >
             <Text style={(styles.TextSubtitle)}> Edit Profile</Text>
           </TouchableOpacity>
         </View>
         <View style={(styles.Box)}>
           <Icon
             type="material-community"
             name="lock-outline"
             size={25}
             color="white"
           />
           <TouchableOpacity >
             <Text style={(styles.TextSubtitle)}> Change Password </Text>
           </TouchableOpacity>
         </View>
       </View>
       <View style={(styles.ModeContainer)}>
         <Icon
           type="material-community"
           name="weather-night"
           size={25}
           color="white"
         />
         <Text style={(styles.TextSubtitle)}> Dark Mode </Text>
         <View style={styles.SwitchContainerMode}>
           <Switch
             trackColor={{ true: '#00b0ff' }}
             thumbColor={isEnabledmode ? 'white' : 'white'}
             ios_backgroundColor="#c4e4f3"
             onValueChange={toggleSwitchmode}
             value={isEnabledmode} />
         </View>
       </View>
       <View style={(styles.SupportContainer)}>
         <View style={(styles.Box)}>
           <Icon
             type="material-community"
             name="shield-lock"
             size={25}
             color="white"
           />
           <TouchableOpacity>
             <Text style={(styles.TextSubtitle)}> Security </Text>
           </TouchableOpacity>
         </View>
         <View style={(styles.Box)}>
           <Icon
             type="material-community"
             name="information-outline"
             size={25}
             color="white"
           />
           <TouchableOpacity>
             <Text style={(styles.TextSubtitle)}> About </Text>
           </TouchableOpacity>
         </View>
         <View style={(styles.Box)}>
           <Icon
             type="material-community"
             name="cog"
             size={25}
             color="white"
           />
           <TouchableOpacity>
             <Text style={(styles.TextSubtitle)}> Privacy Policy </Text>
           </TouchableOpacity>
         </View>
       </View>
       <View>
         <TouchableOpacity style={(styles.ButtonContainer)} onPress={logOut}>
           <Text style={(styles.ButtonText)}> Logout</Text>
         </TouchableOpacity>
       </View>
       </View>
     </ImageBackground>
   </View>
 );
};

const styles = StyleSheet.create({
 Container: {
   alignItems: 'center',
   display: 'flex',
   height: '100%',
   backgroundColor: colors.bluec4e4,
 },
 Image: {
   width: '100%',
   height: '80%',
   alignItems: 'center',
 },
 TextTitle: {
   fontSize: 15,
   color: colors.bluec4e4,
   fontWeight: '500',
 },
 SettingsView:{
  width: '83%',
  marginBottom: -100,
  marginTop: 110,
  padding: 2,
 },
 TextSubtitle: {
   letterSpacing: 3,
   fontSize: 15,
   color: colors.white,
   marginLeft: 30,
 },
 AccountContainer: {
   backgroundColor: colors.blue416a,
   width: '100%',
   marginTop: 25,
   padding: 10,
   borderRadius: 10,
 },
 SwitchContainer: {
   flex: 1,
   marginLeft: 20,
   marginTop: -5,
 },
 Box: {
   height: 40,
   display: 'flex',
   flexDirection: 'row',
 },
 ModeContainer: {
   backgroundColor: colors.blue416a,
   width: '100%',
   marginTop: 15,
   height: 55,
   padding: 15,
   borderRadius: 10,
   display: 'flex',
   flexDirection: 'row',
 },
 SwitchContainerMode: {
   flex: 1,
   marginTop: -5,
   marginLeft: 85,
 },
 SupportContainer: {
   backgroundColor: colors.blue416a,
   width: '100%',
   marginTop: 15,
   padding: 10,
   borderRadius: 10,
 },
 ButtonContainer: {
   backgroundColor: colors.blue2951,
   height: 50,
   width: 300,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 10,
   alignSelf: 'center',
 },
 ButtonText: {
   fontSize: 20,
   fontWeight: '600',
   color: colors.white,
 },
});

export default Component;

