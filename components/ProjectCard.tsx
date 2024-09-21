import { getImage } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ArrowForward from './icons/ArrowForward';

async function ProjectCard(project) {
    const { featured_media } = project;
    const { year, client, type } = project.acf.details_group;
    const imageData = await getImage(featured_media);
    return (
        <article key={project.id} className='h-[80dvh] flex items-end'>
            <Image 
                src={imageData.source_url} 
                alt="" 
                className='z-0 object-cover object-center relative'
                priority
                fill
            />
            <div className='w-full h-fit flex bg-main z-30 p-xs gap-sm border-t-[1px] border-b-[1px] border-secondary [&>*]:uppercase'>

                <h3 className="max-w-[88%] text-xl leading-xl font-black uppercase">{project.title.rendered}</h3>
                
                <div className='flex flex-col gap-sm'>
                    <div className='flex flex-col'>
                        <span className='text-sm font-black leading-sm'>y</span>
                        <p className='text-xs font-medium leading-xs'>{year}</p>   
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-black leading-sm'>cl</span>
                        <p className='text-xs font-medium leading-xs'>{client}</p>   
                    </div>
                    <div className='flex flex-col'>
                    <span className='text-sm font-black leading-sm'>t</span>
                        <p className='text-xs font-medium leading-xs'>{type}</p>   
                    </div>
                    <Link 
                        href="/"
                        className='flex text-sm font-black leading-sm gap-[2px]'
                    >
                        <span>view</span>
                        <ArrowForward/>
                    </Link>
                </div>
                
            </div>
        </article>
    );
}

export default ProjectCard