import React, { useEffect, useState } from "react";
import Nevbar from "./components/Nevbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spiner from "./components/Spiner";
import {apiUrl,filterData} from "./data";       
import { toast } from "react-toastify";

const App = () => {
  const [courses,setcourses] = useState(0)
  const [spiner,setspiner] = useState(false);
  
  useEffect(() => {
    const fetchdata =  async()=>{
      
      try{
        setspiner(true);
        const response = await fetch( apiUrl) ;
        const output = await response.json();
        setcourses(output.data)        
        setspiner(false);
      }
      catch(error)
      {
        toast.error("somthing went wrong ");
      }
    }
    
    fetchdata(); 
  },[])
  
  
  
  
  
  return(
  <div className="min-h-screen flex flex-col bg-bgDark2 "> 
    <Nevbar> </Nevbar>

    <Filter filterData={filterData}></Filter>

    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
      {
        spiner ?  <Spiner></Spiner> : <Cards courses={courses}></Cards>
      }
    </div>
      


    </div>)
};

export default App;
