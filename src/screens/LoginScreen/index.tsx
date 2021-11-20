/* eslint-disable prettier/prettier */
import React, { useEffect} from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useForm} from '../../hooks/useForms';
import {LoginInterface} from '../../interfaces/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps <any, any>{}

const Component = (props: Props) => {
  const {navigation} = props;
  const {email, password, onChange} = useForm<LoginInterface>({
    email: '',
    password: '',
  });

  useEffect(()=>{
    console.log(`Email -> ${email}`);
    console.log(`Passwrod -> ${password}`);
  },[email, password]);

  const doLogin = ()=>{
    if (!(email === 'a' && password === 'a')) {return;}
    navigation.navigate('Home');
  };

 return (
   <View style={(styles.Container)}>
     <Image style={(styles.Image)} source={require('../../assets/images/login.jpeg')} />
     <View style={(styles.InputsContainer)}>
       <TextInput style={(styles.InputEmail)}
         placeholder="user@example.com" onChangeText= {value => onChange('email',value)} keyboardType = "email-address" maxLength={1}/>
       <TextInput style={(styles.InputPassword)}
         placeholder="Password" secureTextEntry={true} onChangeText= {value => onChange('password',value)}
          />
       <View>
         <TouchableOpacity><Text style={(styles.Text)}>Forgot password?</Text>
         </TouchableOpacity>
         <View style={(styles.ButtonContainer)}>
           <TouchableOpacity style={(styles.ButtonLogin)} onPress={doLogin}>
             <Text style={(styles.ButtonText)}  > Log in</Text>
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
   flex: 1,
 },
 Image: {
   width: '100%',
   height: '50%',
   marginTop: -50,
 },
 InputsContainer: {
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
   backgroundColor: 'white',
   marginTop: -9,
 },
 InputEmail: {
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
 InputPassword: {
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
export default Component;
