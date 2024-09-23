import { getImage, getPostsData, getSinglePost } from '@/utils/api'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateStaticParams() {
  const posts = await getPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);
  if (!post) return { title: 'Project not founded' };
  return { title: post[0].title.rendered };
}

async function SingleProject({params}:{params:{slug: string}}) {
  const data = await getSinglePost(params.slug);

  if (!data || data.length === 0) {
    notFound();
  }

  const { title, featured_media, acf } = data[0];
  const imageData = await getImage(featured_media);
  const { details_group, gallery } = acf;

  return (
    <>
      <div className='h-[calc(100dvh-193px)] p-sm mt-[41px] flex items-center justify-center'>
        <Image src={imageData.source_url} alt="" width={400} height={100} className="z-0"/>
      </div>
      <div className='border-secondary border-t-[1px]'>
        <h2 className='text-xl leading-xl font-black py-xs px-sm border-secondary border-b-[1px]'>{title.rendered}</h2>
        <div className='px-sm md:px-md py-xs border-secondary border-b-[1px] [&>div]:grid [&>div]:grid-cols-6 [&>div]:py-xs [&>div]:gap-lg [&>div:last-child]:border-0 [&>div]:border-secondary [&>div]:border-b-[1px] [&>div>p]:text-sm [&>div>p]:leading-md [&>div>p]:font-medium [&>div>span]:col-span-2 [&>div>p]:col-span-4'>
          <div>
            <span className='capitalize'>year</span>
            <p className='uppercase'>{details_group.year}</p>
          </div>
          <div>
            <span className='capitalize'>client</span>
            <p className='uppercase'>{details_group.client}</p>
          </div>
          <div>
            <span className='uppercase'>ad</span>
            <p className='uppercase'>{details_group.art_director}</p>
          </div>
          <div className='col-span-6'>
            {details_group.description.split('\r\n\r\n').map((p, index) => (
                <p key={index}>{p}</p>
            ))}
          </div>
        </div>
        <div className='grid items-center justify-center'>
            {gallery.map((item) => {
              return (
                <Image key={item.image} src={item.image} alt="" width={400} height={100} priority/>
              )
            })}
        </div>
      </div>
    </>
  )
}

export const revalidate = 60000;

export default SingleProject