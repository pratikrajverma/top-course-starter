import React, { useEffect } from "react";
import Card from "./Card";

const Cards = ({ courses }) => {

  let courselist = [];  
    const arrayofarray = Object.values(courses);

    arrayofarray.forEach((element) => {
      element.forEach((value) => {
          
          courselist.push(value); 
      
      });
    });
  



  return (
    <div className="flex flex-wrap justify-center gap-5 mb-4 m-w-[100px]">
      {
        courselist.map((course) => {
        return <Card key={course.id} course={course}></Card>;
      })
      }
    </div>
  );
};

export default Cards;
