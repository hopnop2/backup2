import { StyleSheet } from "react-native";

const Login = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#C5D0E6", // สีน้ำเงินอ่อนแบบ Lego
    },
    spacing: {
        height: 10,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom:10,
        borderWidth: 4,
        borderColor: "#000",
        borderRadius: 12,
        backgroundColor: "#FF0000", // สีแดง Lego
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        marginTop: 175,
    },
    title: {
        fontSize: 32,
        fontWeight: "900",
        color: "#ffff", // สีแดงอ่อนลง สบายตากว่าเดิม
        marginBottom: 10,
        textShadowColor: "#000 ",
        textShadowOffset: { width: 12, height: 12 },
        textShadowRadius: 0,
        letterSpacing: 1.5,
        
    },
    input: {
        width: 280,
        height: 50,
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 6,
        paddingHorizontal: 15,
        backgroundColor: "#FFD700", // สีเหลือง Lego
        color: "#000",
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "bold",
        elevation: 5,
    },
    button: {
        backgroundColor: "#00B0F0", // สีฟ้า Lego
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 8,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
       
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0,
        letterSpacing: 1.5,
    },
    // เพิ่มสไตล์studs (จุดนูนเลโก้)
    studContainer: {
        position: 'absolute',
        top: -10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 300,
    },
    
    btn: {
        width: 120, // ปรับขนาดปุ่ม
        height: 40, // เพิ่มความสูง
        borderRadius: 10, // โค้งมน
        backgroundColor: '#007BFF', // สีพื้นน้ำเงิน
        justifyContent: 'center', // ตำแหน่งข้อความในแนวตั้ง
        alignItems: 'center', // ตำแหน่งข้อความในแนวนอน
        margin: 8, // ระยะห่าง
        borderWidth: 2, // มีกำหนดเส้นขอบรอบปุ่ม
        borderColor: '#004C99', // สีของขอบปุ่ม
        color : "white"
        
    },
    



});

export default Login;
