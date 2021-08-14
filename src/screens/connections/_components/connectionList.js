import React from 'react';
import { Connection } from "../_components/index.js";
import { View } from 'react-native';
import { useEffect , useState } from 'react';


    // const arr = [{
    //     id:1,
    //     firstName : 'Swarup Sai' ,
    //     lastName:'Swarup',
    //     phoneNumber:9876543210,
    //     role:'Jr Developer',
    //     email:'swarupkintali98',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:2,
    //     firstName : 'Venky bro' ,
    //     lastName:'bro',
    //     role:'Sr FullStack Developer',
    //     phoneNumber:4637378828,
    //     email:'venkyuwu123',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:3,
    //     firstName : 'Shaik Matheen' ,
    //     lastName:'MAtheen',
    //     phoneNumber:83939933,
    //     role:'Sr FullStack Developer',
    //     email:'skmatheen',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:4,
    //     firstName : 'Gnyani bro' ,
    //     lastName:'bro',
    //     phoneNumber:9876543210,
    //     role:'Sr FullStack Developer',
    //     email:'gnyaniejhejje',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:5,
    //     firstName : 'Gopi bro' ,
    //     lastName:'bro',
    //     phoneNumber:9876543210,
    //     role:'UI / Ux Designer',
    //     email:'gopikakak',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:6,
    //     firstName : 'Swarup Sai' ,
    //     lastName:'Swarup',
    //     phoneNumber:9876543210,
    //     role:'Jr Developer',
    //     email:'swarupkintali98',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:7,
    //     firstName : 'Venky bro' ,
    //     lastName:'bro',
    //     role:'Sr FullStack Developer',
    //     phoneNumber:4637378828,
    //     email:'venkyuwu123',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // },
    // {
    //     id:8,
    //     firstName : 'Shaik Matheen' ,
    //     lastName:'MAtheen',
    //     phoneNumber:83939933,
    //     role:'Sr FullStack Developer',
    //     email:'skmatheen',
    //     description : ' Researching, designing, implementing, and managing software programs · '
    // }];

    

    
    export const ConnectionList= ()=> {
        const [data, setData] = useState([]);
  const getConnectionDetails = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5');
      const json = await response.json();
      console.log("sai")
      setData(json);
      console.log(json);
      
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(async() => { 
    await getConnectionDetails();
  }, [data]);

  
        const data1 = data.map((ele)=> <Connection key ={ele.index} {...ele}/>)        
        return (
           <View>{data1}</View>);
    }