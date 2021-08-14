import React from 'react';
import { View, Text, Image } from 'react-native';

export const ConnectionDetails = (props) => {
        const {
         firstName,
         role,
         description
       } = props;
 
   return( 
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar}    source={require('../../connections/images/icon.png')} style={styles.image}/>
      <View style={styles.body}>
      <Text style={styles.name}>{firstName}</Text>  
      <Text  style={styles.description}>{description}</Text> 
    </View>
  </View>
   );
}
const styles = StyleSheet.create({
   header:{
     backgroundColor: "#00BFFF",
     height:200,
   },
   avatar: {
     width: 130,
     height: 130,
     borderRadius: 63,
     borderWidth: 4,
     borderColor: "white",
     marginBottom:10,
     alignSelf:'center',
     position: 'absolute',
     marginTop:130
   },
   name:{
     fontSize:22,
     color:"#FFFFFF",
     fontWeight:'600',
   },
   body:{
     marginTop:40,
   },
  
   name:{
     fontSize:28,
     color: "#696969",
     fontWeight: "600"
   },
   
   description:{
     fontSize:16,
     color: "#696969",
     marginTop:10,
     textAlign: 'center'
   },
  
 });

