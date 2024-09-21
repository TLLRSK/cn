import { getPageData, getImage } from '@/utils/api';
import React from 'react'

type HomeData = {

};

async function HomePage() {
  const data = await getPageData('home');
  const {name, positions, location, home_image} = data.acf.home_data;
  const imageData = home_image ? await getImage(home_image) : null;
  
  return (
    <section className='h-[100dvh] p-xs'>
      <article className='flex flex-col h-full md:grid md:grid-cols-2 border border-secondary'>

        <div 
          className='flex flex-1 items-end p-xs [&>p]:text-main [&>p]:text-xs [&>p]:font-medium [&>p]:h-fit [&>p]:mix-blend-difference'
          style={{backgroundImage: `url(${imageData.source_url})`, backgroundRepeat: "no-repeat", backgroundPosition:"bottom", backgroundSize:"cover"}}
        >
          <p className='flex-1'>00/00/00</p>
          <p className='flex-1 text-center'>00:00</p>
          <p className='flex-1 text-right uppercase'>{location}</p>

        </div>
        
        <div>
          <h1 className='text-title leading-title font-black uppercase mx-[4px] pt-xs'>{name}</h1>

          <div className='flex justify-between p-xs'>
            {positions.map((item,i) => {
              return <p key={i} className='text-xs leadin-xs font-medium uppercase'>{item.position}</p>
            })}
          </div>
          
        </div>

      </article>
    </section>
  )
}

export default HomePage