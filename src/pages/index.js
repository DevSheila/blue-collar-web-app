import Navbar from "../../components/navbar";
//import axios from "axios";
import { useState } from "react";
import Works from "../../components/works";


export default function Home() {

  
  async function fetchName(){
    await axios.get('/api/hello').then(res =>{
      console.log(res.data);
    })
  }
  return (
    <>
     <Navbar/>
    
    
    <Works/>

     
    </>
  )
}
