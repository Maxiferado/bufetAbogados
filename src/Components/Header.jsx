import React from 'react'
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';
import { mdiScaleBalance } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiGmail } from '@mdi/js';
import Logosvg from './Logosvg';

export default function Header(props : any) {
  return (
    <nav className='h-1/5 w-screen bg-white flex justify-between'>
      <a href="https://riosduranlegalconsulting.com/" target="__blank">
        <div className='flex flex-row gap-2 pl-5 cursor-pointer'>
          <Icon path={mdiScaleBalance}
            title="User Profile"
            size={1}
            color="#cdad7dff"
          />  
          <Logosvg/>        
          <p className='text-black font-bold '>{props.navmain}</p>
        </div>
      </a>
      <div className='flex flex-row gap-5 pr-5'>

        <a href="contacto@riosduranlegalconsulting.com" target="__blank">
          <Icon className='cursor-pointer' path={mdiGmail}
            title="Gmail Contact"
            size={1}
            color="black"
          />
        </a>
        <a href="https://www.instagram.com/riosduranlegalconsultingsas/" target="__blank">
          <Icon className='cursor-pointer' path={mdiInstagram}
            title="Instagram"
            size={1}
            color="black"
          />
        </a>
        <a href="https://wa.me/+573185575418" target="__blank">
          <Icon className='cursor-pointer' path={mdiWhatsapp}
            title="Whatsapp"
            size={1}
            color="black"
          />
        </a>
      </div>
    </nav>
  )
}
