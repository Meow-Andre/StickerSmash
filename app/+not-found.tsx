import { View, StyleSheet } from "react-native" ;
import { Link, Stack } from "expo-router" ;

export default function NotFoundScreen(){
return(
    <>
        <Stack.Screen options={{ title: "Meooow! Nothing!" }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Lets go back Meooow
            </Link>
        </View>
    </> 

)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#25492e" ,
      alignItems: "center" ,
      justifyContent: "center" ,
  
    },
  
  text: {
      color: "#fff" ,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline" ,
    color: "#ffff" ,
  },
  });