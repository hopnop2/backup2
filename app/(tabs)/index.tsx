import { StatusBar } from 'expo-status-bar'; // โมดูลสำหรับจัดการสถานะบาร์บนอุปกรณ์
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Button ,
  ScrollView,
  Modal,
  TouchableHighlight,
  StatusBarStyle,
  
} from 'react-native'; // คอมโพเนนต์พื้นฐานของ React Native
import { LinearGradient } from 'expo-linear-gradient'; // ลูกเล่นพื้นหลังสีไล่ระดับ
import Login from '@/constants/Login '; // นำเข้าสไตล์จากไฟล์คอนฟิกรูปลักษณ์
import { useState } from 'react';
import { Link, useRouter } from 'expo-router'; // ระบบเนวิเกชันสำหรับ Expo
import { Alert } from 'react-native';


/*import Profile1 from '@/assets/images/profile1.jpg'; // นำเข้ารูปภาพจากโฟลเดอร์ assets
import Profile2 from '@/assets/images/profile2.jpg'; // นำเข้ารูปภาพจากโฟลเดอร์ assets
import Profile3 from '@/assets/images/profile3.jpg'; // นำเข้ารูปภาพจากโฟลเดอร์ assets
*/

// คอมโพเนนต์หลักของหน้าแรก
export default function Index() {
  const router = useRouter(); // ตัวจัดการการเปลี่ยนหน้า
  //modle
  const [modalVisible, setModalVisible] = useState(false);
  
  //textinput 






  




  //Alert
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: true }
    );
  };
  //Alert

  return (

  <ScrollView style={{ flex: 1}}>
    <LinearGradient 
      colors={['#FF0000', '#FFD700', '#FFFFFF']} // โทนสีแดง-ทอง-ขาวแบบ LEGO
      style={Login.container}
      start={{ x: 0, y: 0 }} // จุดเริ่มต้นการไล่สี (มุมซ้ายบน)
      end={{ x: 1, y: 1 }} // จุดสิ้นสุดการไล่สี (มุมขวาล่าง)
    >
      {/* ส่วนหัวหน้าเว็บ */}
      <View style={Login.spacing} /> {/* ระยะห่างเว้นวรรคด้านบน */}
      
      {/* โลโก้ LEGO */}
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png' }} 
        style={Login.logo} 
      />

      {/* ข้อความต้อนรับ */}
      <Text style={Login.title}>Welcome</Text>

      {/* ฟอร์มล็อกอิน */}
      <TextInput 
        style={[Login.input]} 
        placeholder='Username' // ช่องกรอกชื่อผู้ใช้
      />
      <TextInput 
        style={[Login.input]} 
        placeholder='Password' // ช่องกรอกรหัสผ่าน
        secureTextEntry // ซ่อนอักขระรหัสผ่าน
      />

      {/* ปุ่มล็อกอินแบบ Custom */}
      <TouchableOpacity style={Login.button} onPress={showAlert}>
        <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>


      {/* ระบบนำทางต่างๆ */}
      <Link href="contact">Click Here</Link> {/* ลิงก์ไปหน้าอื่นแบบพื้นฐาน */}
      
      {/* ปุ่มทดสอบการส่งพารามิเตอร์ 3 แบบ */}
      <Button 
        title='Click test' 
        onPress={() => router.push("/contact?name=ball&major=IT")} // แบบ Query String
      />
      
      <Button 
        title='Click Params' 
        onPress={() => router.push({ // แบบ Object Parameters
          pathname: "/contact",
          params: { 
            name: "Phusin Sosud",
            major: "Information Technology",
            email: "gamertoy3366@gmail.com",
          }
        })} 
      />
      
      <Button 
        title='Go to User ID' 
        onPress={() => router.push("/user/456")} // แบบ Dynamic Route
      />
      
      <Button 
        title='Go to Profile' 
        onPress={() => router.push("/user/profile")} // แบบ Nested Route
      />
  
      <Text style= {{alignItems:'center'}}> use image</Text>
      <Text> &nbsp; </Text>
      <Image source = {require("@/assets/images/profile1.jpg ")}
       style = {{   borderRadius: 100 , marginHorizontal: 10}}
       resizeMode='cover'
      />
      <Text> &nbsp; </Text>
      <Text style= {{alignItems:'center'}}> use image</Text>
      <Text> &nbsp; </Text>
      <Image source = {require("@/assets/images/profile2.jpg ")}
       style = {{   borderRadius: 100 , marginHorizontal: 10}}
       resizeMode='cover'
      />
      <Text> &nbsp; </Text>

      <TouchableHighlight
          underlayColor="white"
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>ShowAlert</Text>
    </TouchableHighlight>



    <Text> &nbsp; </Text>

<TouchableHighlight
    underlayColor="white"
    style={{
      backgroundColor: "skyblue",
      paddingVertical: 20,
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    }}
    onPress={() => {
      {setModalVisible(true)}
    }}
  >
    <Text>Show model</Text>
</TouchableHighlight>


{/* ปุ่มแสดง Modal */}
<Text style={ {textAlign: 'center'}}>การใช้ Modal</Text>
                    <Modal
                        animationType='slide' // fade, slide, none
                        transparent={true}
                        visible={modalVisible}
                        onShow={() => { console.log('Modal Show') }}
                        onRequestClose={() => { console.log('Modal Close') }}
                        >
                        <View style={{
                            flex: 1, 
                            backgroundColor: 'rgba(0, 0, 0, 0.9)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
                            justifyContent: 'center', // จัดกลางในแนวตั้ง
                            alignItems: 'center', // จัดกลางในแนวนอน
                        }}>
                            <View style={{
                            width: 300, // กำหนดความกว้างของ Modal
                            backgroundColor: '#fff', // สีพื้นหลังของ Modal
                            borderRadius: 10, // มุมโค้งมนของ Modal
                            padding: 20, // ระยะห่างภายใน
                            alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
                            }}>
                            <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                <Button
                                    title='Submit'
                                    onPress={() => {
                                        console.log('Submit Modal')
                                    }}
                                />
                                <Button
                                    title='X Close'
                                    onPress={() => {
                                        setModalVisible(false)
                                    }}
                                />
                            </View>
                            </View>
                        </View>
                    </Modal>




      <StatusBar   /> {/* ตั้งค่าสถานะบาร์อัตโนมัติ */}

      <Button 
        title='Go to From' 
        onPress={() => router.push("/textinputdemo")} // แบบ Nested Route
      />

   
    </LinearGradient>
  </ScrollView>


  );
}
