import { Tabs } from "expo-router";
import TabBarIcon from "@/components/navigation/TabBarIcon ";



export default function TabLayout() {
  return (
 <Tabs screenOptions={{
    headerShown: true,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "red",
    },
    tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", color: "white", },
    tabBarStyle: { backgroundColor: "red" ,height:90,  },
    tabBarActiveTintColor: "white",
    tabBarInactiveBackgroundColor: "white",

 }}> 


<Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="contact"
        options={{
          title: "Contract",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="phone" color={color} />
          ),
        }}
      />
      
<Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="users" color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="test"
        options={{
          title: "test",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="database" color={color} />
          ),
        }}
      />






 </Tabs>
  )
}

