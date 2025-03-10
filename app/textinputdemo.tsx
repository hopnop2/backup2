import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useRouter } from 'expo-router';
export default function TextInputDemo() {

  // สร้างตัวแปร inputName, inputEmail, inputTel โดยใช้ useState()
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputTel, setInputTel] = useState("")
  const [inputPassword, setInputpassword] = useState("")
  const [inputNickName, setInputNickname] = useState("")

 
 
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Register</Text>

      <Text>Username</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputName}
        onChange={(e) => setInputName(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Jonh doe"
      />

      <Text>Password</Text>
      <TextInput
        keyboardType="numeric"
        defaultValue={inputPassword}
        onChange={(e) => setInputpassword(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="password"
      />


<Text>Email</Text>
      <TextInput
        keyboardType="email-address"
        defaultValue={inputEmail}
        onChange={(e) => setInputEmail(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="gamertoy3366@gmail.com"
      />


      <Text>Tel</Text>
      <TextInput
        keyboardType="phone-pad"
        defaultValue={inputTel}
        onChange={(e) => setInputTel(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="08400153119"
      />

<Text>Nickname</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputNickName}
        onChange={(e) => setInputNickname(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="nickname"
      />







      {/*  <Button
        title="Submit"
        onPress={() => {
          console.log("Name:", inputName)
          console.log("Email:", inputEmail)
          console.log("Tel:", inputTel)
        }}
     >
      / */}
      

      
<Button 
  title='submit' 
  onPress={() => router.push({ 
    pathname: "/profile2",
    params: {
      name: `${inputName}`,
      password: `${inputPassword}`,
      email: `${inputEmail}`,
      tell: `${inputTel}`,
      nickname: `${inputNickName}`,
    }
  })} 
/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
})
  