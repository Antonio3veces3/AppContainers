/* eslint-disable prettier/prettier */
import React, { useEffect} from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useForm} from '../../hooks/useForms';
import {LoginInterface} from '../../interfaces/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../../themes/baseTheme';

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

  let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const doLogin = ()=>{
    if (email === '' || password === '') {
      Alert.alert('ERROR', 'Fill all data');
    } else {
      if (validation.test(email) === false){
        Alert.alert('ERROR', 'Type a valid email');
      } else {
        navigation.navigate('Home');
      }
    }
  };

 return (
   <View style={(styles.Container)}>
     <Image style={(styles.Image)} source={require('../../assets/images/login.jpeg')} />
     <View style={(styles.InputsContainer)}>
       <TextInput style={(styles.InputEmail)}
         placeholder="user@example.com" onChangeText= {value => onChange('email',value)} keyboardType = "email-address" numberOfLines={1}/>
       <TextInput style={(styles.InputPassword)}
         placeholder="Password" secureTextEntry={true} onChangeText= {value => onChange('password',value)} numberOfLines={1}
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
   backgroundColor: colors.white,
   marginTop: -9,
 },
 InputEmail: {
   marginTop: 30,
   fontSize: 20,
   fontWeight: '400',
   letterSpacing: 3,
   fontStyle: 'italic',
   height: 60,
   color: colors.black050,
   margin: 12,
   padding: 20,
   width: 280,
   borderWidth: 1,
   borderBottomColor: 'gray',
   borderColor: colors.white,
 },
 InputPassword: {
   marginTop: 0,
   fontSize: 20,
   fontWeight: '400',
   letterSpacing: 3,
   fontStyle: 'italic',
   height: 60,
   color: colors.black050,
   margin: 12,
   padding: 20,
   width: 280,
   borderWidth: 1,
   borderBottomColor: 'gray',
   borderColor: colors.white,
 },
 Text: {
   fontSize: 18,
   fontWeight: '700',
   fontStyle: 'italic',
   height: 40,
   color: colors.blue026e,
   left: 140,
 },
 ButtonContainer: {
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
   padding: 10,
 },
 ButtonLogin: {
   backgroundColor: colors.blue2474,
   height: 50,
   width: 300,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
 },
 ButtonText: {
   fontSize: 20,
   fontWeight: '600',
   color: colors.white,
 },
 GAPText: {
   padding: 12,
   letterSpacing: -2,
   color: 'gray',
 },
 ButtonSign:{
   backgroundColor: colors.white,
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
   color: colors.blue2951,
 },
});
export default Component;
