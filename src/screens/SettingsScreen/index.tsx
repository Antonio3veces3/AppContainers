/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Container = () => {
 return (
   <View style={(styles.Container)}>
     <Image style={(styles.Image)} source={require('./src/img/login.png')}/>
     <View style={(styles.InputsContainer)}>
       <TextInput style={(styles.InputName)}
         placeholder="email@email.com" />
       <TextInput style={(styles.InputAge)}
         placeholder="Password" secureTextEntry
         />
       <View>
         <TouchableOpacity><Text style={(styles.Text)}>Forgot password?</Text>
         </TouchableOpacity>
         <View style={(styles.ButtonContainer)}>
           <TouchableOpacity style={(styles.ButtonLogin)}>
             <Text style={(styles.ButtonText)}>Log in</Text>
           </TouchableOpacity>
           <Text style={(styles.GAPText)}>---------------------------    o r    ---------------------------</Text>
           <TouchableOpacity style={(styles.ButtonSign)}>
             <Text style={(styles.ButtonSignText)}>Sign up</Text>
           </TouchableOpacity>
         </View>
       </View>
     </View>
   </View>
 );
};

const styles = StyleSheet.create({
 Container: {
   alignItems: 'center',
   display: 'flex',
   height: '100%',
   justifyContent: 'center',
 },
 Image: {
   width: 390,
   height: 500,
   marginTop: -220,
 },
 InputsContainer: {
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
 },
 InputName: {
   marginTop: 30,
   fontSize: 20,
   fontWeight: '400',
   letterSpacing: 3,
   fontStyle: 'italic',
   height: 60,
   color: '#050000',
   margin: 12,
   padding: 20,
   width: 280,
   borderWidth: 1,
   borderBottomColor: 'gray',
   borderColor: 'white',
 },
 InputAge: {
   marginTop: 0,
   fontSize: 20,
   fontWeight: '400',
   letterSpacing: 3,
   fontStyle: 'italic',
   height: 60,
   color: '#050000',
   margin: 12,
   padding: 20,
   width: 280,
   borderWidth: 1,
   borderBottomColor: 'gray',
   borderColor: 'white',
 },
 Text: {
   fontSize: 18,
   fontWeight: '700',
   fontStyle: 'italic',
   height: 40,
   color: '#026eb7',
   left: 140,
 },
 ButtonContainer: {
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
   padding: 10,
 },
 ButtonLogin: {
   backgroundColor: '#2474d6',
   height: 50,
   width: 300,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
 },
 ButtonText: {
   fontSize: 20,
   fontWeight: '600',
   color: 'white',
 },
 GAPText: {
   padding: 12,
   letterSpacing: -2,
   color: 'gray',
 },
 ButtonSign:{
   backgroundColor: 'white',
   height: 50,
   width: 300,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 1,
   borderColor: 'gray',
 },
 ButtonSignText: {
   fontSize: 20,
   fontWeight: '600',
   color: '#29516b',
 },
});
export default Container;
