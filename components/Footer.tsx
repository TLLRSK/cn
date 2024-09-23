import React from 'react'
import ButtonToTop from './ButtonToTop';
import { getPageData } from '@/utils/api';

async function Footer({footerData}) {
  const { email, social_media_list } = footerData;
  
  return (
    <footer className='relative h-[75vh] flex flex-col p-sm md:px-md border-secondary border-t-[1px]'>
      <ButtonToTop/>
      <div className='flex flex-col'>
        <span className='text-sm leading-sm font-medium capitalize'>contact</span>
        <a href={`mailto:${{email}}`} target='_blank' className='max-w-[50%] text-xl leading-xl font-black uppercase'>
          navarro<br/>coke<br/>@<br/>gmail.<br/>com
        </a>
      </div>
      <div className='flex flex-col justify-end flex-1'>
        <span className='text-sm leading-sm font-medium capitalize'>socials</span>
        <ul className='flex justify-between'>
          {social_media_list.map((media, i) => {
            const mediaData = media.social_media;
            return (
              <li key={i}>
                <a href={mediaData.url} className='text-sm leading-sm font-black uppercase'>
                  {mediaData.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='uppercase grid text-sm leading-sm [&>span]:font-medium mt-lg'>
        <span>cokenavarro</span>
        <span>©2024</span>
      </div>
    </footer>
  )
}

export default Footer