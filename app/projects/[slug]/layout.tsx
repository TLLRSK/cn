import EndBlock from '@/components/EndBlock'
import ProjectNavigation from '@/components/ProjectNavigation';
import { getPostsData } from '@/utils/api';
import React from 'react'

interface SingleProjectLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

async function SingleProjectLayout({ children, params }: SingleProjectLayoutProps) {
  const postsData = await getPostsData();
    
  return (
    <section>
        <article>
            {children}
        </article>
        <ProjectNavigation projects={postsData} currentSlug={params.slug} />
        <EndBlock/>
    </section>
  )
}

export default SingleProjectLayout