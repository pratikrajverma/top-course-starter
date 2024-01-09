import React, { useState } from 'react'
import { toast } from "react-toastify";
import { FcLike } from "react-icons/fc";

const Card = ({course}) => {
    const[liked,setliked] = useState(false);
    const[opacity,setopacity] = useState('opacity-40');
    const[readmore,setreadmore] = useState(false);
    function readmorehandler()
    {
        setreadmore(!readmore);
    }

    const [info,setinfo] =  useState(course.description.substr(0,100));

    function clickhandler()
    {
        if(liked==false)
        {
            toast.success('Liked')
            setliked(true);
            setopacity('opacity-100')
        }
        else{
            toast.warning ('Disliked')
            setliked(false);
            setopacity('opacity-40')

        }


    }

  return (
    <div className='w-[300px] min-h-80  bg-bgDark rounded-lg overflow-hidden bg-opacity-80 max-h-max'>
        <div className='relative'> 
            <img src={course.image.url}></img>

            <div className='w-[35px] h-[35px] rounded-full bg-white absolute right-3 -bottom-[12px] grid place-items-center'>
                <button  className={opacity} onClick={clickhandler}  >
                    <FcLike fontSize="1.3rem "></FcLike>
                </button>
            </div>
        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='pt-2 text-white'>{readmore ?    course.description : info}
                                    <span className='text-sky-400 ml-2 cursor-pointer' onClick={readmorehandler}>{readmore ? 'showless' : 'readmore'}</span>
                                    </p>
        </div>


    </div>
  )
}

export default Card