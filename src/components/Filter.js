import React from 'react';

const Filter = (props) => {

  return (
    <div className='w-11/12 flex max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-cen'>
      {
        props.filterData.map((data) => {
               return <button key={data.id} className='text-lg px-2 py-1 rounded-md 
                        text-white bg-black hover:bg-opacity-50 border-2
                        '>{data.title}</button>
            })
      }
    </div>
  );
};

export default Filter;
