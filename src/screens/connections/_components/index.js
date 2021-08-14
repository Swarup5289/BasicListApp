import React from 'react';
import { View, Text, StyleSheet ,FlatList, Button , TouchableOpacity , ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ConnectionDetailsScreen } from '../../connectionDetails';
import { useEffect , useState } from 'react';


export const Connection = (props) => {
  
 
const navigation  = useNavigation();
      const {
        firstname,
        surname,
        age,
        picture,
        company,
        gender,
        email,
        phone
      } = props;

      const styles = StyleSheet.create({
        profileName :{
          fontSize:20,
          paddingLeft:15,
          marginLeft:10,
          flexDirection: 'row',
        },
        role :{
          fontSize:15,
          paddingLeft:15 ,
          marginLeft:10
              },
        desc :{
          fontSize:13,
          paddingLeft:15,
          paddingTop: 5,
          marginLeft:10,
          marginRight:90
        },
        container :{
          backgroundColor: 'white',
          paddingTop:20,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          display:'flex'
        },
        image :{
          width: 60,
          height: 60 ,
          flexDirection:'row',
          borderRadius:80 ,
          marginLeft:70 
        }
      });
return(<View style = {styles.container} >
      <Image source={require('../images/icon.png')} style={styles.image}/>
     <TouchableOpacity onPress={() => navigation.navigate(ConnectionDetailsScreen)}  >
            <Text style={styles.profileName}>
            {firstname}</Text>
            <Text style ={styles.role}>{company}</Text>
            <Text style ={styles.desc}>{email}</Text>
            <View
    style={{
      borderBottomColor: 'darkgrey',
      borderBottomWidth: 1,
      paddingTop:15,
  }}
/>
</TouchableOpacity>
            </View>          
);


  }
