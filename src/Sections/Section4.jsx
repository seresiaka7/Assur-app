import React from 'react'
import Sect4 from "../assets/sect4.png"
import Verify from "../assets/verify.png"
const Section4 = () => {
  return (
    <div>
    <div className=' mx-40 my-2'>
<div className=' flex justify-center align-center items-end  bg-cover  bg-slate-100 rounded-3xl shadow-md'   >

<div className='mt-10  '> 

<img  src={Sect4} className="  "  width={600} height={50}/>

 </div>
<div className=' my-10 mx-10 align-middle w-3/6  '> 
<div className='mt-15 pt-9'>
<div className='mt-20 pt-10 font-sans font-bold text-6xl my-10 pb-7 align-middle'>
Profitez de vos objets plus longtemps
</div>
<p className='text-1xl  mt-10 pt-10 font-mono'>

On répare à la demande. Sholip vous propose une réparation chaque fois que c'est possible.</p>
<div  className='flex gap-8  mt-3'>
<p  className='bg-blue-400 rounded-md  font-semibold p-2 shadow-lg'> Anti gaspi</p>
<p className='bg-blue-400 rounded-md font-semibold  p-2 shadow-lg'> Zéro déchet</p>
  
  </div>
</div>
 </div>
 
</div>  
 <br/>

    </div>

    <div className='flex justify-end items-end mb-3  '>
    <div>
    <img  classNamme="" src={Verify} width={200} height={80} />
    </div>
 </div>
    </div>
  )
}

export default Section4