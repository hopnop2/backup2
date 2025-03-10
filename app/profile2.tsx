import { StyleSheet, Text, View, Button,TouchableOpacity , Touchable } from 'react-native'
import React from 'react'
import Login from '@/constants/Login '
import { useRouter,useLocalSearchParams } from 'expo-router'


export default function contact() {
    const router = useRouter();
    const {name,major,tel} = useLocalSearchParams();
  return (
    <View style={Login.container}>
      <Text >Name : {name}</Text>
      <Text>emil : {major}</Text>
      <Text>tel : {tel}</Text>
      {/* <Button  title='Click test'  onPress={()=> router.back()} /> */}
    
      <TouchableOpacity style={Login.btn} onPress={() => router.back()}>
      <Text style = {{color : "white"}} > Click test</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})