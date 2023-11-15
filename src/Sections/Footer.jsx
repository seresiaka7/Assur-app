import React from 'react'
import Sect3 from "../assets/sect3.png"
import Search from "../assets/search1.png"
const Footer = () => {
  return (
    <div className='mt-10 text-white-400'>
    
    <div className=' flex flex-col justify-between align-baseline  bg-cover  bg-slate-600 mt-7' >
          <div className='flex flex-col justify-center items-center  mt-7'>
            <div className='font-semibold text-3xl pt-5'>
                Inscrivez-vous dans notre Newsletter 
            </div>
              <div className='flex  '>
             <div className='  rounded-lg p-5 '>
                <form>
                    <input className=' px-20 w-95 h-20' type="text" placeholder='' />
                </form>
             </div>
             <div className=' ' >
                <button  className='my-5  '> 
                <img src={Search} className=" rounded-full " width={83} height={60}/>
                </button>
             </div>
             </div>
          </div>
          <div  className='my-5' >
              <div>Plus besoin de dire adieu
                       aux 
                objets que vous aimez.
                </div>
                <div>Revendeurs
                      Particuliers
                Carrières ↗
               FAQ
                </div>
               <div>
               Cookies
                Confidentialité
                Mentions légales
                CGU
               </div>
          </div>
          <div>
             
          Evy est une Société par Actions Simplifiée (SAS) au capital de 1 955.08 €, 
          inscrite au registre du commerce et des sociétés 
          de Paris sous le numéro 902 019 819, et dont, le siège social est situé  38 
          rue des Mathurins à Paris (75008).
          </div>
          <div>
              <div>
              © Copyright 2023 Evy. Tous droits réservés.
              </div>
              <div>
                <a target="_blank" href='linkedin.com/in/siaka-sere/'> LinkedIn ↗</a>
              </div>
             
          </div>


  



    </div>
    </div>
  )
}

export default Footer