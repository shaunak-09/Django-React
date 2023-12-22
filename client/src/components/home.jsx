import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { server } from '../server';
 function Land() {
    const [data, setdata] = useState()

  

    useEffect(()=>{
        const func = async ()=>{
            try{
           const data= await axios.get(`${server}/room`);
           console.log(data.data);
           setdata(data.data);
            }
            catch(err){
                console.log(err);
            }
        }
        func();
    },[])

  return (
    <div>
        {
            // data?.map((item,i)=>{
            //     return(
            //         {item}
            //     )
            // })
        }
    </div>
  )
}

export default Land