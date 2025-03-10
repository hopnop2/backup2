import { Stack } from "expo-router";

export default function Rootlayout() {
  return (
    <Stack screenOptions=
    {{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle:  {
            backgroundColor: "red",
        },
        headerTintColor:"white"
    }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false }} />
        <Stack.Screen name="(admin)" options={{headerShown: false }} />
        <Stack.Screen name="index" options={{title: "Main"}} />
        <Stack.Screen name="contact" options={{title: "Contact"}} />
        <Stack.Screen name="+not-found" options={{title: "Not found "}} />
        <Stack.Screen name="textinputdemo" options={{title: "From ", headerShown:true}} />
        <Stack.Screen name="switchdemo" options={{title: "switch ", headerShown:true}} />
        <Stack.Screen name="flatlistdemo" options={{title: "flatelist ", headerShown:true}} />
    </Stack>
  )
}