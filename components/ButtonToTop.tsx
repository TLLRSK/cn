'use client'
import React from 'react'
import ArrowTop from './icons/ArrowTop'

function ButtonToTop() {
  return (
    <button className='absolute top-[40%] right-sm md:right-md flex flex-col items-end' onClick={() => window.scrollTo(0,0)}>
        <ArrowTop className={'text-secondary'} />
        <span className='text-sm font-black leading-sm text-left uppercase'>to<br/>top</span>
    </button>
  )
}

export default ButtonToTop