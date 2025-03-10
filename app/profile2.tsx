import { StyleSheet, Text, View, Button,TouchableOpacity , Touchable } from 'react-native'
import React from 'react'
import Login from '@/constants/Login '
import { useRouter,useLocalSearchParams } from 'expo-router'


export default function contact() {
    const router = useRouter();
    const {name,password,email,tell,nickname} = useLocalSearchParams();
  return (
    <View style={Login.container}>
      <Text >Username : {name}</Text>
      <Text>password : {password}</Text>
      <Text>email : {email}</Text>
      <Text>tell : {tell}</Text>
      <Text>nickname : {nickname}</Text>
     
      {/* <Button  title='Click test'  onPress={()=> router.back()} /> */}
    
      <TouchableOpacity style={Login.btn} onPress={() => router.back()}>
      <Text style = {{color : "white"}} > Click test</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})